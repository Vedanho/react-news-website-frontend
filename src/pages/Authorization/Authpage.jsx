import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./Authpage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../features/userSlice";
import Button from "@mui/material/Button";
import { Navigate, NavLink } from "react-router-dom";
import Proccess from "../../components/Preloader/Proccess";
import logo from "../../assets/image43.png";

const Authpage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const token = useSelector((state) => state.userReducer.token);
  const signingIn = useSelector((state) => state.userReducer.signingIn);
  const error = useSelector((state) => state.userReducer.error_auth);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (login === "" || password === "") {
      setMessage("Поля логина и пароля не должны быть пустыми");
    } else if (login !== "" && password !== "") {
      dispatch(auth({ login, password }));
      setLogin("");
      setPassword("");
    }
  };

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      {token && <Navigate replace to="/" />}
      {signingIn ? (
        <div className={styles.loading}>
          <Proccess />
        </div>
      ) : (
        <div className={styles.Auth}>
          <div className={styles.auth_conteiner}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
            {message && <div style={{ color: "red" }}>{message}</div>}
            {error && (
              <div style={{ color: "red", textAlign: "center" }}>{error}</div>
            )}
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
            <p>
              У вас нет аккаунта? Тогда
              <NavLink to="/regist"> зарегистрируйся,уцы</NavLink>
            </p>
            <Button variant="outlined" onClick={handleClick}>
              Авторизоваться
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Authpage;
