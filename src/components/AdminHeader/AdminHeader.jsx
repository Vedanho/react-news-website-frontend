import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./AdminHeader.module.css"
import logo from "../../assets/image43.png";


const AdminHeader = () => {
    return (
        <>
        <div className={styles.header}> <img src = {logo}></img></div> 
        </>
    );
};

export default AdminHeader;
