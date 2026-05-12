import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [jezik, setJezik] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const changeLanguage = () => {
    const newLang = jezik ? "sr" : "en";
    setJezik((prev) => !prev);
    i18n.changeLanguage(newLang);
  };
  return (
    <section
      id="hero"
      className="h-[calc(100vh)] [@media(min-width:700px)]:h-auto flex  pt-20"
    >
      <div className="absolute top-0 left-0 flex w-full justify-between md:hidden">
        <img src="/breskva.png" className="mt-8 ml-8 h-[60px]" />
        <p
          className="font-oregano mt-8 mr-8 text-3xl border p-2 leading-none  pt-[15px] rounded-2xl shadow-xl  border"
          onClick={changeLanguage}
        >
          {jezik ? "SR" : "EN"}
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid grid-cols-[1fr_2fr] w-full overflow-hidden">
        <div className="flex items-center ml-4">
          <div>
            <h1 className="text-6xl text-white font-bold leading-tight font-wedding">
              Bojana
            </h1>

            <h2 className="text-6xl text-white font-bold font-wedding">
              Kostić
            </h2>

            <p className="mt-6 text-3xl text-white-400 max-w-md  font-oregano">
              {t("title")}
            </p>
          </div>
        </div>

        <div className="">
          <img
            src={isMobile ? "bp2.png" : "bp1.png"}
            className="h-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
