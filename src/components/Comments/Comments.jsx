import React from 'react';
import styles from "./Comments.module.css"

const Comments = ({certainNews}) => {
    return (
        <div className={styles.Comments}>
            {certainNews.comments.map((element) => {
              return (
                <>
                <p>{element.text}</p>
                <p>{element.user.login}</p>
                </>
              )
              })}
        </div>
    );
};

export default Comments;