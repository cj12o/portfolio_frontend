"use server";

import nodemailer from "nodemailer";

type EmailFormData = {
  email: string;
  message: string;
  name: string;
};

export async function sendEmail(formData: EmailFormData) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user:`${process.env.MAIL}`, 
      pass:`${process.env.MAIL_PASSWORD}`, 
    },
  });

  let info=await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.MAIL}>`,
    replyTo: `"${formData.name}" <${formData.email}>`,
    to: `${process.env.MAIL}`,
    subject: `Portfolio contact from ${formData.name}`,
    text: formData.message,
    html: `<p><strong>From:</strong> ${formData.name} (${formData.email})</p><p>${formData.message}</p>`,
  });
}
