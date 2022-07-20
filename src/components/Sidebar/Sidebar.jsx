import React from "react";
import styles from "./Sidebar.module.css";
import logo from "../../assets/logo_footer.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <img src={logo} alt="logo"></img>
      <NavLink to='/admin/page' className={styles.list_item}>Создание новостей</NavLink>
      <NavLink to='/users'className={styles.list_item}>Пользователи сайта</NavLink>
      <NavLink to='/redaction'className={styles.list_item}>Редактирование новостей</NavLink>
      <NavLink to='/delete' className={styles.list_item}>Удаление новостей</NavLink>
      <NavLink to="/" className={styles.list_item}>Выйти</NavLink>
    </div>
  );
};

export default Sidebar;
