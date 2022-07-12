import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./Regist.module.css";
import { useDispatch } from "react-redux";
import { regist } from "../../features/userSlice";
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";


const Regist = () => {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
  
    const dispatch = useDispatch()
  
    const handleClick = () => {
      dispatch(regist({login, password}))
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
          <p>Есть аккаунт?  <NavLink to='/auth'>Войдите</NavLink></p>
          <Button variant="outlined" onClick={handleClick}>Зарегистрироваться</Button>
        </div>

      </div>
    );
};

export default Regist;