import React, { useState } from "react";
import styles from "./AddAnEvent.module.css";
import Select from "../../components/Select"
import Button from "../../components/Button";
import { Link, Redirect } from "react-router-dom";

const AddAnEvent = () => {
    const [valueSelect, setValueSelect] = useState("event")
    const [budget, setBudget] = useState("")
    const [adress, setAdress] = useState("")
    const [textMark, setTextMark] = useState("")
    const [time, setTime] = useState("")
    const [title, setTitle] = useState("")
    const [success, setSuccess] = useState(false)

    if (success) return <Redirect to="/" />

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                Добавить событие
            </div>
            <Select
                budget={budget}
                setBudget={setBudget}
                adress={adress}
                setAdress={setAdress}
                textMark={textMark}
                setTextMark={setTextMark}
                time={time}
                setTime={setTime}
                title={title}
                setTitle={setTitle}
                value={valueSelect}
                setValue={setValueSelect} />
            <div className={styles.buttons}>
                <Link to="/">
                    <Button
                        onClick={() => {
                            if (localStorage.getItem("qwe")) {
                                let data = JSON.parse(localStorage.getItem("qwe"))
                                let removed = data.splice(-1, 1);
                                console.log(data)
                                localStorage.setItem("qwe", JSON.stringify(data))
                            }
                        }}
                        text="Отмена" />
                </Link>
                <Button
                    onClick={() => {
                        if ((adress && time) || (budget) || (textMark)) {
                            if (localStorage.getItem("qwe")) {
                                const data = JSON.parse(localStorage.getItem("qwe"))
                                data[data.length - 1].type = valueSelect
                                switch (valueSelect) {
                                    case "event":
                                        data[data.length - 1] = {
                                            ...data[data.length - 1],
                                            title, adress, time
                                        }
                                        break;
                                    case "holiday":
                                        data[data.length - 1] = {
                                            ...data[data.length - 1],
                                            title, budget
                                        }
                                        break;
                                    case "mark":
                                        data[data.length - 1] = {
                                            ...data[data.length - 1],
                                            title, textMark
                                        }
                                        break;
                                    default:
                                        break;
                                }

                                // data[data.length - 1].type = valueSelect
                                console.log(data)
                                localStorage.setItem("qwe", JSON.stringify(data))
                            }
                            setSuccess(true)
                        }
                        else {
                            alert("Все поля должны быть заполнены!!!")
                        }
                    }}
                    text="Сохранить" />
            </div>
        </div>
    );
};

export default AddAnEvent;