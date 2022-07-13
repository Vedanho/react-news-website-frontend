import React from "react";
import styles from "./Comments.module.css";
import { useSelector } from "react-redux";

const Comment = ({ text, userId }) => {
  const user = useSelector((state) =>
    state.userReducer.users.find((user) => {
      return (userId === user._id);
    })
  );

  if (!user) {
    return "Загрузка";
  }
  return (
    <div className={styles.comment}>
      <h3>{user.login}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Comment;
