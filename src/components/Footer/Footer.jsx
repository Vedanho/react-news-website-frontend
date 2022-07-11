import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo_footer.png";
import facebook from "../../assets/facebook.png"
import wifi from "../../assets/Wi-fi.png"
import img from "../../assets/telepuzik.png"
import twitter from "../../assets/twitter.png"
const Footer = () => {
  return (
    <div className={styles.Footer_conteiner}>
      <div className={styles.Footer}>
        <div className={styles.logo}>
          <img src={logo} alt="logotip"></img>
        </div>
        <div className={styles.list_conteiner}>
          <ul className={styles.list}>
            <li>О нас</li>
            <li>Карьера</li>
            <li>Контакты</li>
            <li>Купоны</li>
          </ul>
        </div>
        <div className={styles.networks}>
          <img src={wifi} alt="wifi_img" />
          <img src={twitter} alt="twitter_img" />
          <img src={img} alt="man_img" />
          <img src={facebook} alt="facebook_img" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
