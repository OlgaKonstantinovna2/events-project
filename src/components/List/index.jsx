import styles from "./List.module.css"
import React, { useState } from "react";
import editIcon from "../../images/editIcon.svg";
import deleteIcon from "../../images/deleteIcon.svg";
import { Link } from "react-router-dom";

const names = {
    "title": "Название:",
    "budget": "Бюджет:",
    "adress": "Адрес:",
    "time": "Время:",
    "textMark": "Текст заметки:",
    "date": "Дата:",
    "type": "Тип:"
}

const List = ({ data }) => {
    console.log(JSON.stringify(data));
    if (data) {
        return (
            <div className={styles.wrapper}>
                {
                    Object.keys(data)
                        .sort((a) => a !== "title" ? 1 : -1)
                        .map((item, i) =>
                            (item !== "title" && item !== "type") ? (
                                <div key={`label_${i}`} className={styles.texts}>
                                    <p>{names[item]}</p>
                                    <p>{data[item]}</p>
                                </div>
                            ) : item === "title" ? (
                                <div key={`label_${i}`} className={styles.title}>
                                    {data.title}
                                </div>
                            ) : (
                                <div></div>
                            )
                        )
                }
                <div className={styles.actions}>
                    <Link>
                        <img className={styles.actionImg} src={editIcon} alt="edit" />
                    </Link>
                    <img className={styles.actionImg} src={deleteIcon} alt="delete" />
                </div>
            </div>
        );
    }
    return null
};

export default List;