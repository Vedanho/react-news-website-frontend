import React from "react";
import logo from "../../assets/image43.png";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../features/categoriesSlice";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { GiExitDoor } from "react-icons/gi";
import { cleanToken } from "../../features/userSlice";
import Proccess from "../Preloader/Proccess";
import { ImNewspaper } from "react-icons/im";

const Header = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.category.categories);
  const token = useSelector((state) => state.userReducer.token);
  const proccess = useSelector((state) => state.category.proccess);
  const role = useSelector((state) => state.userReducer.role);

  const handleClick = () => {
    dispatch(cleanToken());
  };

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
            {proccess ? (
              <div className={styles.line_loading}>
                <Proccess />
              </div>
            ) : (
              categories.map((element) => {
                return (
                  <li key={element._id}>
                    <NavLink
                      to={`/category/${element._id}`}
                      className={({ isActive }) =>
                        isActive ? styles.active_link : styles.disactive_link
                      }
                    >
                      {element.name}
                    </NavLink>
                  </li>
                );
              })
            )}
          </ul>
        </div>
        <div className={styles.auth_search_conteiner}>
          {token ? (
            <GiExitDoor onClick={handleClick} className={styles.exit} />
          ) : (
            <NavLink to="/auth">
              <VscAccount className={styles.acc} />
            </NavLink>
          )}
          <NavLink to="/">
            <AiOutlineHome className={styles.search} />
          </NavLink>
          {role === "admin" && <NavLink to="admin/page"><ImNewspaper className={styles.exit} /></NavLink>}
        </div>
      </div>
    </div>
  );
};

export default Header;
