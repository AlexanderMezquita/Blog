import React, { useState, useEffect } from "react";
import Card from "../globals/Card";
import Title from "./title";
import { useTranslation } from "react-i18next";
import Billcrest from "../projects/billcrest";
import MovieSearch from "../projects/movieSearch";
import Ecommerce from "../projects/ecommerce";
import billcrestImage from "../assets/billcrest/index.png";
import movieSearchImage from "../assets/searchApp/searchapp.png";
import ecommerce from "../assets/a&b-ecommerce/ab-ecommerce.png";

export default function Project() {
  const [billcrestOpen, setBillcrestOpen] = useState(false);
  const [movieSearchOpen, setMovieSearchOpen] = useState(false);
  const [ecommerceOpen, setEcommerceOpen] = useState(false);

  const { t } = useTranslation();

  const handleBillcrestPopUp = () => {
    setBillcrestOpen(!billcrestOpen);
  };
  const handleMovieSearchPopUp = () => {
    setMovieSearchOpen(!movieSearchOpen);
  };
  const handleEcommercePopUp = () => {
    setEcommerceOpen(!ecommerceOpen);
  };

  useEffect(() => {
    if (billcrestOpen || movieSearchOpen || ecommerceOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [billcrestOpen, movieSearchOpen, ecommerceOpen]);

  return (
    <section id="portfolio" className="py-7">
      <Title
        title={t("mywork")}
        description={t("myworkd")}
        backTitle={t("myworkb")}
      />

      <div className="flex flex-wrap lg:p-0">
        <Billcrest open={billcrestOpen} close={handleBillcrestPopUp} />
        <MovieSearch open={movieSearchOpen} close={handleMovieSearchPopUp} />
        <Ecommerce open={ecommerceOpen} close={handleEcommercePopUp} />
        <Card
          title="Billcrest - Point of Sales"
          techs={["Tailwind", "Material UI", "Next.js"]}
          image={billcrestImage}
          handlePopup={handleBillcrestPopUp}
        />
        <Card
          title="Abercrombie & Fitch E-commerce"
          techs={["TypeScript", "Next.js", "Tailwind"]}
          development={true}
          image={ecommerce}
          handlePopup={handleEcommercePopUp}
        />
        <Card
          title="Movie Search"
          techs={["Vite + React", "CSS"]}
          image={movieSearchImage}
          handlePopup={handleMovieSearchPopUp}
        />
      </div>
    </section>
  );
}
