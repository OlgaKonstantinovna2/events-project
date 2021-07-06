import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
    const {
        setValue,
        maxLength,
        value,
        type = "text",
        label
    } = props;

    return (
        <div className={styles.input}>
            <input
                maxLength={maxLength}
                onChange={(event) => setValue(event.target.value)}
                value={value}
                className={styles.inputNative}
                type={type}
                required={true}
                {...props}
            />
            <label>{label}</label>
            <div className={styles.bar}></div>
        </div>
    );
};

export default Input;
