export const contactFormValidation = (values: {
  name: string;
  email: string;
  message: string;
  rodoConsent: boolean;
  website: string;
}) => {
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();
  const website = values.website.trim();

  if (website) {
    return { success: true, message: "Dziękuję za wiadomość." };
  }

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Uzupełnij imię, adres e-mail i treść wiadomości.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      success: false,
      message: "Podaj poprawny adres e-mail.",
    };
  }

  if (!values.rodoConsent) {
    return {
      success: false,
      message:
        "Zgoda na przetwarzanie danych jest wymagana do wysłania formularza.",
    };
  }

  return { success: true, message: "Dziękuję za wiadomość." };
};
