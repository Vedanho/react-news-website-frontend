import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import styles from "./AdminPageBody.module.css";
import { createNews } from "../../features/newsSlice";
import { fetchCategories } from "../../features/categoriesSlice";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const AdminPageBody = () => {
  const categories = useSelector((state) => state.category.categories)

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [picture, setPicture] = useState("");

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const textChange = (e) => {
    setText(e.target.value);
  };

  const categoryChange = (e) => {
    setCategory(e.target.value);
  };

  const pictureChange = (e) => {
    setPicture(e.target.value);
  };

  const handleClick = () => {
    dispatch(createNews({ title, text, category, picture }));
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  console.log(category)

  return (
    <>
      <div className={styles.body}>
        <div className={styles.text_conteiner}>
          <h1>Заголовок новости</h1>
          <textarea className={styles.text} onChange={titleChange}></textarea>
        </div>
        <div className={styles.text_conteiner}>
          <h1>Текст новости</h1>
          <textarea className={styles.text} onChange={textChange}></textarea>
        </div>
        <div className={styles.text_conteiner} onChange={categoryChange}>
          <h1>Категория новости</h1>
          <FloatingLabel controlId="floatingSelect" label="Works with selects">
            <Form.Select aria-label="Floating label select example">
              <option>Open this select menu</option>
              {categories.map((element, index) => {
                return <option value={element._id} key={element._id} onChange={categoryChange}> {element.name} </option>;
              })}
            </Form.Select>
          </FloatingLabel>
        </div>
        <div>
          <h1>Фотография новости</h1>
          <textarea className={styles.text} onChange={pictureChange}></textarea>
        </div>
        <Button variant="outlined" color="error" onClick={handleClick}>
          Добавить новость
        </Button>
      </div>
    </>
  );
};

export default AdminPageBody;
