import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchNews } from "../../features/newsSlice";

const Category = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const news = useSelector((state) => state.newsReducer.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const newsByCategorie = news.filter((element) => {
    if (!params.id) return true;
    console.log(element.category);
    return element.category === params.id;
  });

  console.log(newsByCategorie);
  console.log(params.id);
  return (
    <div>
      {newsByCategorie.map((element) => {
        return <div>{element.text}</div>;
      })}
    </div>
  );
};

export default Category;
