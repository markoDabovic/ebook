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

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Poruka",
    html: `
      <h2>Pozdrav!</h2>
      <p>Ovo je probna</p>
    `,
  });

  res.status(200).json({ success: true });
}
