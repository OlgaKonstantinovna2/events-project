import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import styles from "./datePicker.module.css"

const DatePickerComponent = ({ selected, onClickDay, onChange }) => {
    return (
        <DatePicker
            selected={selected}
            onChange={onChange}
            inline
            dateFormat="dd/MM/YYYY"
            onClickDay={onClickDay}
        />
    );
};

export default DatePickerComponent;