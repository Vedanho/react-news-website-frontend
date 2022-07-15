import React from "react";
import styles from "./Newsbody.module.css";
import { FaRegComment } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNewsById } from "../../features/newsSlice";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments";

const Newsbody = () => {
  const dispatch = useDispatch();
  const params = useParams();
  
  const certainNews = useSelector((state) => state.newsReducer.certainNews);
  const proccess = useSelector((state) => state.newsReducer.proccess);
  const downoload = useSelector((state) => state.newsReducer.downoload)


  useEffect(() => {
    dispatch(getNewsById(params.id));
  }, [dispatch]);

  if (proccess) {
    const text = certainNews.text.split(".");
    return (
      <>
      {downoload ? <div>Идёт загрузка</div> :
       <div className={styles.background}>
         <div className={styles.main}>
           <div className={styles.title_conteiner}>
             <h1>{certainNews.title}</h1>
           </div>
           <div className={styles.img_conteiner}>
             <img
               src={`http://localhost:4500/${certainNews.picture}`}
               alt="image of news"
             ></img>
           </div>
           <div className={styles.text}>
             {text.map((element, index, array) => {
               if (element !== "") {
                 return index % 2 === 0 ? (
                   <p key={index}>{element + "."}</p>
                 ) : (
                   <span key={index}>{element + "."}</span>
                 );
               }
             })}
           </div>
           <div><h1><FaRegComment />Comments</h1><Comments params={params} /></div></div>
       </div>
     }
      
      </>
    );
  }
};

export default Newsbody;
