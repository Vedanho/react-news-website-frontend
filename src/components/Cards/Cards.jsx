import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../features/newsSlice";
import "./Cards.css"


const Cards = () => {
  const news = useSelector((state) => state.newsReducer.news);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div className="cards_group">
      {news.map((element) => {
        return (
          <div className="card">
            <div className="img_conteiner">
              <img src={`http://localhost:4500/${element.picture}`}></img>
            </div>
            <div className="card_body">
              <h5 className="title">{element.title}</h5>
              <p className="text">{element.text}</p>
            </div>
            <div className="footer">
              <p></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
