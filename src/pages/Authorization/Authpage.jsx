import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./Authpage.module.css";
import { useDispatch } from "react-redux";
import { auth } from "../../features/userSlice";
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";

const Authpage = () => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(auth({login, password}))
    setLogin("")
    setPassword("")
  }

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.Auth}>
      <div className={styles.auth_conteiner}>
        <h1>Авторизация</h1>
        <TextField
          id="outlined-basic"
          label="Login"
          variant="outlined"
          value={login}
          onChange={handleChangeLogin}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          onChange={handleChangePassword}
          type="password"
        />
        <p>У вас нет аккаунта? Тогда <NavLink to="/regist"> зарегистрируйся,уцы</NavLink></p>
        <Button variant="outlined" onClick={handleClick}>Авторизоваться</Button>
      </div>
    </div>
  );
};

export default Authpage;
