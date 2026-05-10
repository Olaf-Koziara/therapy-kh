'use server';

type ContactFormResult = {
  success: boolean;
  message: string;
};

const getString = (formData: FormData, key: string) => {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactForm(
  formData: FormData,
): Promise<ContactFormResult> {
  const name = getString(formData, 'name');
  const email = getString(formData, 'email');
  const phone = getString(formData, 'phone');
  const message = getString(formData, 'message');
  const rodoConsent = getString(formData, 'rodoConsent');
  const website = getString(formData, 'website');

  if (website) {
    return {
      success: true,
      message: 'Dziękuję za wiadomość.',
    };
  }

  if (!name || !email || !message) {
    return {
      success: false,
      message: 'Uzupełnij imię, adres e-mail i treść wiadomości.',
    };
  }

  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Podaj poprawny adres e-mail.',
    };
  }

  if (rodoConsent !== 'true') {
    return {
      success: false,
      message: 'Zgoda na przetwarzanie danych jest wymagana do wysłania formularza.',
    };
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
    return {
      success: false,
      message:
        'Formularz nie jest jeszcze skonfigurowany. Skorzystaj proszę z telefonu 889 470 294 albo adresu kamila@helta.pl.',
    };
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? 'Formularz <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL,
      reply_to: email,
      subject: `Nowe zapytanie ze strony - ${name}`,
      text: [
        `Imię i nazwisko: ${name}`,
        `E-mail: ${email}`,
        phone ? `Telefon: ${phone}` : null,
        '',
        'Wiadomość:',
        message,
      ]
        .filter(Boolean)
        .join('\n'),
    }),
  });

  if (!response.ok) {
    return {
      success: false,
      message:
        'Nie udało się wysłać wiadomości. Spróbuj ponownie albo skorzystaj z telefonu lub e-maila.',
    };
  }

  return {
    success: true,
    message: 'Dziękuję za kontakt. Skontaktuję się z Tobą wkrótce.',
  };
}
