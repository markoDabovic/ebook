import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-12 h-[calc(100vh)]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-oregano mb-8">{t("OMeni")}</h2>

        <p className="text-white leading-relaxed text-xl mb-4 font-oregano ml-1 mr-1 md:text-4xl">
          {t("OMeniText")}
        </p>

        <p className="mb-6 mt-6 text-2xl font-oregano md:text-4xl">
          {t("OMeniKonsultacije")}
        </p>

        <a
          href="tel:+38160000000"
          className="bg-white text-pink-300 px-10 py-1 mt-6 mb-2 rounded-xl text-2xl font-oregano  transition md:text-4xl"
        >
          {t("Pozovi")}
        </a>
      </div>
    </section>
  );
}
