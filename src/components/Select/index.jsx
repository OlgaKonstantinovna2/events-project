import styles from "./Select.module.css"
import React from "react";
import Input from "../../components/Input"

const Select = (
    { onChange,
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
                    id='5'
                />
            </div>
            <div className={styles.selectWrapper}>
                <div className={styles.title}>Тип события:</div>
                <select
                    className={styles.select}
                    onChange={(event) => onChange(event.target.value)}
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
                        id='1'
                    />
                ) : value === "mark" ? (
                    <Input
                        value={textMark}
                        setValue={setTextMark}
                        label="Описание:"
                        id='2'
                    />
                ) : value === "event" ?
                    (
                        <div>
                            <Input
                                value={adress}
                                setValue={setAdress}
                                label="Куда идти?"
                                id='3'
                            />
                            <Input
                                value={time}
                                setValue={setTime}
                                label="Во сколько?"
                                id='4'
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