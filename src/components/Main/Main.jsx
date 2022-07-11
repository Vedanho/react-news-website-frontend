import React from "react";
import styles from "./Main.module.css";
import Cards from "../Cards/Cards";
import BreakingNews from "../BreakingNews/BreakingNews";
import CarouselNews from "../Carousel/Carousel";



const Main = () => {
  return (
    <div className={styles.Main}>
      <CarouselNews className={styles.CarouselNews}/>
      <BreakingNews />
      <Cards />
    </div>
  );
};

export default Main;
