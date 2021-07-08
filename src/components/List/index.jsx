import styles from "./List.module.css"
import React from "react";
import editIcon from "../../images/editIcon.svg";
import deleteIcon from "../../images/deleteIcon.svg";

const names = {
    "title": "Название:",
    "budget": "Бюджет:",
    "adress": "Адрес:",
    "time": "Время:",
    "textMark": "Текст заметки:",
    "date": "Дата:",
    "type": "Тип:"
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

const List = ({ data }) => {
    console.log(JSON.stringify(data));
    if (data) {
        return (
            <div className={styles.wrapper}>
                {
                    Object.keys(data)
                        .sort((a) => a !== "title" ? 1 : -1)
                        .map((item, id) =>
                            (item !== "title" && item !== "type") ? (
                                <div key={`label_${id}`} className={styles.texts}>
                                    <p>{names[item]}</p>
                                    <p>{data[item]}</p>
                                </div>
                            ) : item === "title" ? (
                                <div key={`label_${id}`} className={styles.title}>
                                    {data.title}
                                </div>
                            )
                                : item === "date" ? (
                                    <div key={`label_${id}`} className={styles.title}>
                                        <p>{names[item]}</p>
                                        <p>{formatDate(data[item])}</p>
                                    </div>
                                )
                                    : (
                                        <div key={`label_${id}`}></div>
                                    )
                        )
                }
                <div className={styles.actions}>
                    <img className={styles.actionImg} src={editIcon} alt="edit" />
                    <img className={styles.actionImg} src={deleteIcon} alt="delete" />
                </div>
            </div>
        );
    }
    return null
};

export default List;