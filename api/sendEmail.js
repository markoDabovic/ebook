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
  const imageUrl = `${baseUrl}/QR code.jpg`;
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject:
      "Plaćanje za program transformacije / Payment for transformation program",
    html: `
    <h3>Hey, ovo je kod preko koga vršiš plaćanje svog programa transformacije. Samo ga preuzmi u galeriju i IPS skeniraj u aplikaciji svoje banke.
    <br/>
    Hey in case you're not Serbian or you are, but you prefer another way to pay here's my Paypal account to get your transformation: kosticcb@gmail.com</h3>
  `,
    attachments: [
      {
        filename: "QR code.jpg",
        path: imageUrl,
      },
    ],
  });

  res.status(200).json({ success: true });
}
