'use server';

export async function sendContactForm(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');

  // Here you would typically send an email using a service like Resend, Nodemailer, etc.
  console.log('Form submission received:', { name, email, phone, message });

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}
