import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, getNewsById } from "../../features/newsSlice";
import styles from "./Cards.module.css";
import { BsBookmarkCheck } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Cards = () => {
  const news = useSelector((state) => state.newsReducer.news);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  
  
    return (
      <div className={styles.cards_group}>
        {news.map((element) => {
          return (
            <div className={styles.card}>
              <div className={styles.img_conteiner}>
                <img src={`http://localhost:4500/${element.picture}`}></img>
              </div>
              <div className={styles.role}>
              <div className={styles.card_body}>
                <h5 className={styles.title}>{element.title}</h5>
                <p className={styles.text}>{element.text.slice(0, 125)}<NavLink to= {`/new/${element._id}`}>...Читать далее</NavLink></p>
              </div>
              <hr/>
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

export default Cards;


