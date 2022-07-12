import React, { useEffect } from "react";
import { getUsers } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import styles from "./Comments.module.css";
import Comment from "./Comment";
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

const Comments = ({ certainNews }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={styles.Comments}>
      <div className={styles.input}>
        <Input placeholder="Написать комментарий" inputProps={ariaLabel} />
        <button>Добавить</button>
      </div>
      {certainNews.comments.map((comment) => {
        return <Comment text={comment.text} userId={comment.user} />;
      })}
    </div>
  );
};

export default Comments;
