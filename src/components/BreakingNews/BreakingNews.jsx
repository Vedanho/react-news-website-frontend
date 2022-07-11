import React from 'react';
import styles from "./BreakingNews.module.css"

const BreakingNews = () => {
    return (
        <div className={styles.red_line}>
            <div className={styles.red_line_title}>Breaking News</div>
            <h5 className={styles.red_line_text}>Kanye West says he's running for president in 2020.</h5>
        </div>
    );
};

export default BreakingNews;