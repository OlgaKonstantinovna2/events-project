import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
    const {
        text,
        onClick
    } = props;

    return (
        <div className={styles.buttonWrapper}>
            <button
                className={styles.button}
                onClick={onClick}>
                {text}
            </button>
        </div>
    );
};

export default Button;
