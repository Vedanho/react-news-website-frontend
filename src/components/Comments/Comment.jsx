import React from "react";
import styles from "./Comments.module.css";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../features/commentSlice";

const Comment = ({ text, comment_userId, user_id, comment_id }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) =>
    state.userReducer.users.find((user) => {
      return comment_userId === user._id;
    })
  );

  const handleClick = () => {
    dispatch(deleteComment(comment_id));
  };

  if (!user) {
    return "Проверка";
  }
  return (
    <div className={styles.comment_conteiner}>
      <div className={styles.comment}>
        <h3>{user.login}</h3>
        <p>{text}</p>
      </div>
      {comment_userId === user_id && 
     
          <button onClick={handleClick}>Удалить</button>
    
      }
    </div>
  );
};

Comment.propTypes = {
  text: PropTypes.string,
  userId: PropTypes.string,
};

export default Comment;
