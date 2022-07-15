import React, { useEffect, useState } from "react";
import { getUsers } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Comments.module.css";
import Comment from "./Comment";
import Input from "@mui/material/Input";
import { addComment, getComments } from "../../features/commentSlice";
import Button from "@mui/material/Button";
import Proccess from "../Preloader/Proccess";
import PropTypes from "prop-types";

const ariaLabel = { "aria-label": "description" };

const Comments = ({ params }) => {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.commentsReducer.comments);
  const error = useSelector((state) => state.commentsReducer.error);
  const comments_loading = useSelector((state) => state.commentsReducer.comments_loading);

  const [text, setText] = useState("");

  const user_id = localStorage.getItem("userId");
  const newsId = params.id;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  const handlerAddComment = () => {
    if (text !== "") {
      dispatch(addComment({ text, newsId, user_id }));
      setText("");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.Comments}>
      <div className={styles.input}>
        <Input
          placeholder="Написать комментарий"
          inputProps={ariaLabel}
          onChange={handleChange}
          value={text}
          className={styles.input}
        />
        <Button variant="outlined" color="error" onClick={handlerAddComment}>
          Добавить
        </Button>
      </div>
      {error && <div className={styles.error}>{error}</div>}
      {comments_loading ? (
        <div className={styles.loading}>
          <Proccess />{" "}
        </div>
      ) : (comments.map((comment, index) => {if (newsId === comment.news) {
              return (
                <Comment text={comment.text} userId={comment.user} key={index}/>
              );}}).reverse())}
    </div>
  );
};

Comments.propTypes = {
  params: PropTypes.string
}

export default Comments;
