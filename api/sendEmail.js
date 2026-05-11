import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const baseUrl = process.env.BASE_URL;
  const imageUrl = `${baseUrl}/qr.jpg`;
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Plaćanje za eBook",
    html: `
    <h2>Cao, u prilogu se nalazi plaćanje za eBook </h2>
  `,
    attachments: [
      {
        filename: "qr.jpg",
        path: imageUrl,
      },
    ],
  });

  res.status(200).json({ success: true });
}
