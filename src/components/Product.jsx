import { useTranslation } from "react-i18next";
import engleskiPdf from "../assets/preview in english.pdf";
import srpskiPdf from "../assets/preview in serbian.pdf";
import knjigaSrpski from "../assets/book.jpg";
import knjigaEngleski from "../assets/knjigaEngleski.jpg";
import { useState } from "react";

export default function Product() {
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");

  const openPdf = () => {
    const pdfUrl = i18n.language === "sr" ? srpskiPdf : engleskiPdf;
    window.open(pdfUrl, "_blank");
  };

  const sendEmail = async () => {
    await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    }).then((res) => {
      setEmail("");
      setOpen(false);
      setEmailSent(true);
      setTimeout(() => {
        setEmailSent(false);
      }, 2000);
    });
  };

  const model = (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl w-80 shadow-xl">
        <h2 className="text-lg font-semibold mb-4 text-black">
          {t("enterEmail")}
        </h2>

        <input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 bg-pink-300 rounded-lg"
          >
            {t("Izadji")}
          </button>

          <button
            onClick={sendEmail}
            className="px-4 py-2 bg-pink-300 text-white rounded-lg"
          >
            {t("Posalji")}
          </button>
        </div>
      </div>
    </div>
  );

  const emailSentView = (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl w-80 shadow-xl">
        <h2 className="text-black">{t("emailSent")}</h2>
      </div>
    </div>
  );
  return (
    <section id="program" className="py-12 bg-white ">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 items-center">
        <img
          src={i18n.language === "sr" ? knjigaSrpski : knjigaEngleski}
          className="h-[400px] rounded-2xl shadow-xl ml-3"
        />

        <div className="ml-4 mr-2">
          <h2 className="text-4xl font-bold mb-6 text-pink-300 font-oregano">
            Fitness Program
          </h2>

          <p className="text-pink-300 mb-8 text-xl font-oregano">
            {t("Proizvod")}
          </p>

          <div className="flex gap-5 flex align-center justify-center">
            <button
              onClick={openPdf}
              className="px-6 py-3 border w-[130px] border-pink-300 bg-pink-300 rounded-lg transition font-oregano"
            >
              Preview
            </button>
            <button
              onClick={() => setOpen(true)}
              className="px-6 py-3 border w-[130px] border-pink-300 bg-pink-300 rounded-lg transition font-oregano"
            >
              {t("Kupi")}
            </button>
          </div>
        </div>
      </div>
      {open && model}
      {emailSent && emailSentView}
    </section>
  );
}
