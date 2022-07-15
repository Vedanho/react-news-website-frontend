import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import styles from "./Carousel.module.css";

function CarouselNews() {
  const news = useSelector((state) => state.newsReducer.news);
  const loading = useSelector((state) => state.newsReducer.loading);

  const random_1 = Math.floor(Math.random() * news.length);
  const random_2 = Math.floor(Math.random() * news.length);
  const random_3 = Math.floor(Math.random() * news.length);

  if (loading) {
    return (
      <Carousel className={styles.carousel} variant="dark">
        <Carousel.Item className={styles.item}>
          <img className={styles.image} src={`http://localhost:4500/${news[random_1].picture}`}
           alt="First slide"/>
          <Carousel.Caption className={styles.item_text}>
            <div className={styles.text_conteiner}>
              <h6>Trending</h6>
              <h5>{news[random_1].title}</h5>
              <p>{news[random_1].text.slice(0, 85)}...</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.item}>
          <img className={styles.image} src={`http://localhost:4500/${news[random_2].picture}`}
            alt="Second slide"/>
          <Carousel.Caption className={styles.item_text}>
            <div className={styles.text_conteiner}>
              <h6>Trending</h6>
              <h5>{news[random_2].title}</h5>
              <p>{news[random_2].text.slice(0, 85)}...</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.item}>
          <img
            className={styles.image} src={`http://localhost:4500/${news[random_3].picture}`}
            alt="Third slide"/>
          <Carousel.Caption className={styles.item_text}>
            <div className={styles.text_conteiner}>
              <h6>Trending</h6>
              <h5>{news[random_3].title}</h5>
              <p>{news[random_3].text.slice(0, 85)}...</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselNews;
