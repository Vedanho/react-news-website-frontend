import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchNews } from "../../features/newsSlice";
import styles from "../Category/Category.module.css";
import { BsBookmarkCheck } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Category = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const news = useSelector((state) => state.newsReducer.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const newsByCategorie = news.filter((element) => {
    if (!params.id) return true;
    return element.category === params.id;
  });

  return (
    <div className={styles.cards_group}>
      {newsByCategorie.map((element, index) => {
        return (
          <div className={styles.card} key={index}>
            <div className={styles.img_conteiner}>
              <img
                src={`http://localhost:4500/${element.picture}`}
                alt="news_picture"
              ></img>
            </div>
            <div className={styles.role}>
              <div className={styles.card_body}>
                <h5 className={styles.title}>{element.title}</h5>
                <p className={styles.text}>
                  {element.text.slice(0, 125)}
                  <NavLink to={`/new/${element._id}`}>...Читать далее</NavLink>
                </p>
              </div>
              <hr />
              <div className={styles.footer}>
                <span><BsHeart /></span>
                <span><BsBookmarkCheck /></span>
                <span><FiShare /></span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
