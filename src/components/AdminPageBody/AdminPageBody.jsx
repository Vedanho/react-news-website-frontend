import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import styles from "./AdminPageBody.module.css";
import { createNews } from "../../features/newsSlice";
import { fetchCategories } from "../../features/categoriesSlice";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { GoCloudUpload } from "react-icons/go";

const AdminPageBody = () => {
  const categories = useSelector((state) => state.category.categories);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [picture, setPicture] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (picture) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(picture);
    }
  });

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const textChange = (e) => {
    setText(e.target.value);
  };

  const categoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleClick = () => {
    if (picture !== "" && title !== "" && text !== "" && category !== "") {
      dispatch(createNews({ picture, title, text, category }));
      setTitle("");
      setCategory("");
      setText("");
      setError("");
      setPicture(null);
      setPreview(null);
    } else {
      setError("Все поля должны быть заполнены");
    }
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      <div className={styles.body}>
        <div className={styles.picture_conteiner}>
          <h2>Фотография новости</h2>
          {picture ? (
            <div className={styles.picture}>
              <img src={preview}></img>
            </div>
          ) : (
            <div className={styles.picture}>
              <GoCloudUpload />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPicture(e.target.files[0])}
          />
        </div>
        <div className={styles.text_title_conteiner}>
          <div className={styles.title_conteiner}>
            <h2>Заголовок новости</h2>
            <textarea
              className={styles.title}
              onChange={titleChange}
              value={title}
            ></textarea>
          </div>
          <div className={styles.text_conteiner}>
            <h2>Текст новости</h2>
            <textarea
              className={styles.text}
              onChange={textChange}
              value={text}
            ></textarea>
          </div>
          <div className={styles.text_conteiner} onChange={categoryChange}>
            <h2>Категория новости</h2>
            <FloatingLabel
              controlId="floatingSelect"
              label="Выберите категорию"
              value={category}
            >
              <Form.Select
                aria-label="Floating label select example"
                classaName={styles.select}
                value={category}
              >
                <option> </option>
                {categories.map((element, index) => {
                  return (
                    <option
                      value={element._id}
                      key={element._id}
                      onChange={categoryChange}
                    >
                      {element.name}
                    </option>
                  );
                })}
              </Form.Select>
            </FloatingLabel>
          </div>
        </div>
        <div className={styles.button_conteiner}>
          <Button variant="outlined" color="error" onClick={handleClick}>
            Добавить новость
          </Button>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </div>
    </>
  );
};

export default AdminPageBody;
