import { useTranslation } from "react-i18next";
import engleskiPdf from "../assets/preview in english.pdf";
import srpskiPdf from "../assets/preview in serbian.pdf";
import knjigaSrpski from "../assets/book.jpg";
import knjigaEngleski from "../assets/knjigaEngleski.jpg";

export default function Product() {
  const { t, i18n } = useTranslation();

  const openPdf = () => {
    const pdfUrl = i18n.language === "sr" ? srpskiPdf : engleskiPdf;
    window.open(pdfUrl, "_blank");
  };

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
              onClick={() =>
                window.open(
                  "https://wa.me/381631207033?text=hey%20draga,%20posalji%20mi%20podatke%20za%20uplatu%20🤍%20🍑",
                  "_blank",
                )
              }
              className="px-6 py-3 border w-[130px] border-pink-300 bg-pink-300 rounded-lg transition font-oregano"
            >
              {t("Kupi")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
