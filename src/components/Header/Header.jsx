import React from "react";
import logo from "../../assets/image43.png";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../features/categoriesSlice";
import { VscAccount } from "react-icons/vsc";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Header = () => {
  const categories = useSelector((state) => state.category.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={styles.header_conteiner}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.categories_conteiner}>
          <ul className={styles.categories_list}>
            {categories.map((element, index) => {
              return <li key={element._id}>{element.name}</li>;
            })}
          </ul>
        </div>
        <div className={styles.auth_search_conteiner}>
          <NavLink to="/auth">
            <VscAccount className={styles.acc} />
          </NavLink>
          <BsSearch className={styles.search} />
        </div>
      </div>
    </div>
  );
};

export default Header;
