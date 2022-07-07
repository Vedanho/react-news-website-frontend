import React from "react";
import logo from "../../assets/image43.png";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../features/categoriesSlice";
import { VscAccount  } from "react-icons/vsc"
import { BsSearch } from "react-icons/bs"

const Header = () => {
  const categories = useSelector((state) => state.category.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="header_conteiner">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="categories_conteiner">
          <ul className="categories_list">
            {categories.map((element, index) => {
              return <li key={element._id}>{element.name}</li>;
            })}
          </ul>
        </div>
        <div className="auth_search_conteiner">
       <VscAccount className="acc" />
       <BsSearch className="search"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
