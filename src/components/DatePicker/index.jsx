import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import styles from "./datePicker.module.css"

const DatePickerComponent = ({ selected, onClickDay, onChange }) => {
    return (
        <DatePicker
            selected={selected}
            onChange={onChange}
            inline
            dateFormat="yyyy/MM/dd"
            onClickDay={onClickDay}
        />
    );
};

export default DatePickerComponent;