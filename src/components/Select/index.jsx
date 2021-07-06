import styles from "./Select.module.css"
import React, { useState } from "react";
import Input from "../../components/Input"

const Select = (
    { setValue,
        value,
        name,
        budget,
        setBudget,
        adress,
        setAdress,
        time,
        setTime,
        title,
        setTitle,
        textMark,
        setTextMark
    }
) => {

    return (
        <div className={styles.wrapper}>
            <div>
                <Input
                    value={title}
                    setValue={setTitle}
                    label="Название события:"
                />
            </div>
            <div className={styles.selectWrapper}>
                <div className={styles.title}>Тип события:</div>
                <select
                    className={styles.select}
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                    name={name}>
                    <option value="event">Мероприятие</option>
                    <option value="holiday">Праздник</option>
                    <option value="mark">Заметка</option>
                </select>
            </div>
            {
                value === "holiday" ? (
                    <Input
                        value={budget}
                        setValue={setBudget}
                        label="Бюджет:"
                    />
                ) : value === "mark" ? (
                    <Input
                        value={textMark}
                        setValue={setTextMark}
                        label="Описание:"
                    />
                ) : value === "event" ?
                    (
                        <div>
                            <Input
                                value={adress}
                                setValue={setAdress}
                                label="Куда идти?"
                            />
                            <Input
                                value={time}
                                setValue={setTime}
                                label="Во сколько?"
                            />
                        </div>
                    ) : (
                        <div>
                        </div>
                    )
            }
        </div>
    );
};

export default Select;