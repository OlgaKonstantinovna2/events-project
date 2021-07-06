import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import styles from "./Main.module.css";
import DatePickerComponent from "../../components/DatePicker";
import { Link } from "react-router-dom";
import List from "../../components/List";
import { render } from "@testing-library/react";

const Main = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [today, setToday] = useState(null)

    const init = (date) => {
        setStartDate(new Date(date))
        if (localStorage.getItem("qwe")) {
            console.log(date);
            setToday(
                JSON.parse(localStorage.getItem("qwe")).filter((item) =>
                    (new Date(item.date)).getDate() === (new Date(date)).getDate() &&
                    (new Date(item.date)).getMonth() === (new Date(date)).getMonth() &&
                    (new Date(item.date)).getFullYear() === (new Date(date)).getFullYear()
                )
            )
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.calendar}>
                <DatePickerComponent
                    selected={startDate}
                    onChange={init}
                />
                <div className={styles.button}>
                    <Link to="/AddAnEvent">
                        <Button
                            onClick={
                                () => {
                                    const tmp = JSON.parse(localStorage.getItem("qwe")) || []
                                    tmp.push({
                                        date: startDate
                                    })
                                    localStorage.setItem("qwe", JSON.stringify(tmp))
                                }}
                            text='Добавить'
                        />
                    </Link>
                </div>
            </div>
            <div>
                {
                    today && (
                        today.map((item, i) =>
                            <div>
                                {
                                    <List
                                        data={item}
                                    />
                                }
                                <br /><br />
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Main;