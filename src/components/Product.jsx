import { useTranslation } from "react-i18next";

export default function Product() {
  const { t } = useTranslation();
  return (
    <section id="program" className="py-12 bg-white ">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 items-center">
        <img src="/book.jpg" className="h-[400px] rounded-2xl shadow-xl ml-3" />

        <div className="ml-4 mr-2">
          <h2 className="text-4xl font-bold mb-6 text-pink-300 font-oregano">
            Fitness Program
          </h2>

          <p className="text-pink-300 mb-8 text-xl font-oregano">
            {t("Proizvod")}
          </p>

          <div className="flex gap-5 flex align-center justify-center">
            <button className="px-6 py-3 border w-[130px] border-pink-300 bg-pink-300 rounded-lg transition font-oregano">
              Preview
            </button>
            <button className="px-6 py-3 border w-[130px] border-pink-300 bg-pink-300 rounded-lg transition font-oregano">
              {t("Kupi")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
