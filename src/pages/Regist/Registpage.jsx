import React from 'react';
import { useSelector } from 'react-redux';
import Regist from '../../components/Regist/Regist';
import styles from "./Registpage.module.css"
import logo from "../../assets/image43.png"

const Registpage = () => {
    const SignIn = useSelector((state) => state.userSlice.signIn)

    return (
        <>
        <div className={styles.regist_page}>
         <Regist />   
        </div>
        </>
    );
};

export default Registpage;