import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import Newsbody from "../../components/Newsbody/Newsbody";
import Proccess from "../../components/Preloader/Proccess";

const Newspage = () => {
  return (
    <>
      <Header />
      <Newsbody />
    </>
  );
};

export default Newspage;
