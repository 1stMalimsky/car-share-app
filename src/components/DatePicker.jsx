import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Container, Typography } from "@mui/material";
import { Fragment } from "react";

const DatePicker = () => {
  return (
    <Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker label="Basic date time picker" />
      </LocalizationProvider>
    </Fragment>
  );
};

export default DatePicker;
