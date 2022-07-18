import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./Regist.module.css";
import { useDispatch, useSelector } from "react-redux";
import { regist } from "../../features/userSlice";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import logo from "../../assets/image43.png";
import Proccess from "../../components/Preloader/Proccess";

const Regist = () => {
  const error = useSelector((state) => state.userReducer.error);
  const successRegist = useSelector((state) => state.userReducer.successRegist);
  const signingUp = useSelector((state) => state.userReducer.signingUp);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    if (login === "" || password === "") {
      setMessage("Поля логина и пароля не должны быть пустыми");
    } else if (login !== "" && password !== "") {
      dispatch(regist({ login, password }));
      setLogin("");
      setPassword("");
      setMessage("");
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
      {signingUp ? (
        <div className={styles.loading}>
          <Proccess />
        </div>
      ) : (
        <div className={styles.Regist}>
          <div className={styles.regist_conteiner}>
            <div className={styles.logo}>
              <img src={logo} alt="logo" />
            </div>
            {message && <div className={styles.message}>{message}</div>}
            {error && !successRegist && (
              <div className={styles.message}>{error}</div>
            )}
            {successRegist ? (
              <div className={styles.success}>
                Вы успешно зарегистрировались!
                <NavLink to="/Auth" className={styles.success}>
                  Перейдите на страницу авторизации
                </NavLink>
              </div>
            ) : (
              <>
                <h1>Регистрация</h1>
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
                  Есть аккаунт? <NavLink to="/auth">Войдите</NavLink>
                </p>
                <Button variant="outlined" onClick={handleClick}>
                  Зарегистрироваться
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Regist;
