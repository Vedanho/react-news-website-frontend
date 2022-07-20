import React from 'react';
import AdminHeader from '../../components/AdminHeader/AdminHeader';
import AdminPageBody from '../../components/AdminPageBody/AdminPageBody';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from "./Adminpage.module.css"

const Adminpage = () => {
    return (
        <div className={styles.Adminpage}>
            {/* <AdminHeader />  */}
            <div className={styles.Sidebar_Body}>
            <Sidebar />
            <AdminPageBody />
        </div>
            </div>
    );
};

export default Adminpage;<></>