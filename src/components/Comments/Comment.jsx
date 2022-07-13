import React from "react";
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
    <>
      <h3>{user.login}</h3>
      <p>{text}</p>
    </>
  );
};

export default Comment;
