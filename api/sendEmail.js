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
    subject: "Placanje za eBook",
    html: `
    <h2>Cao, u prilogu se nalazi placanje za eBook </h2>
    <img src="cid:placanje"/>
  `,
    attachments: [
      {
        filename: "qr.jpg",
        path: "./public/qr.jpg",
        cid: "placanje",
      },
    ],
  });

  res.status(200).json({ success: true });
}
