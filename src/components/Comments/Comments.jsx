import React, { useEffect, useState } from "react";
import { getUsers } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Comments.module.css";
import Comment from "./Comment";
import Input from "@mui/material/Input";
import { addComment, getComments } from "../../features/commentSlice";
import Button from "@mui/material/Button";


const ariaLabel = { "aria-label": "description" };

const Comments = ({ params }) => {
  const comments = useSelector((state) => state.commentsReducer.comments);
  const error = useSelector((state) => state.commentsReducer.error);
  const [text, setText] = useState();
  const dispatch = useDispatch();

  const newsId = params.id;
  const user_id = localStorage.getItem("userId");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  const handlerAddComment = () => {
    dispatch(addComment({ text, newsId, user_id }));
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
      {comments.map((comment) => {
        if (newsId === comment.news) {
          return <Comment text={comment.text} userId={comment.user} />;
        }
      })}
    </div>
  );
};

export default Comments;
