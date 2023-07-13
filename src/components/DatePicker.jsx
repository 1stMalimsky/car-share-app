import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Fragment } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { dateActions } from "../store/dateHandler";

const DatePickers = ({ dateText, onChange }) => {
  const dispatch = useDispatch();

  const isDarkTheme = useSelector(
    (storePie) => storePie.darkThemeSlice.isDarkTheme
  );

  const handleDateChange = (newDate) => {
    onChange(newDate);
  };

  /* const handleDateChange = (newDate) => {
    if (dateText === "Pickup Date" && newDate == null) {
      return dispatch(dateActions.setStartDate("DD/MM/YY"));
    }
    if (dateText === "Return Date" && newDate == null) {
      return dispatch(dateActions.setEndDate("DD/MM/YY"));
    }
    if (dateText === "Pickup Date") {
      console.log("pickup date", newDate);
      let startTimeStamp = newDate.$d.getTime();
      dispatch(dateActions.setStartDate(startTimeStamp));
    }
    if (dateText === "Return Date") {
      let endTimeStamp = newDate.$d.getTime();
      dispatch(dateActions.setEndDate(endTimeStamp));
    }
  }; */
  return (
    <Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {isDarkTheme ? (
          <DatePicker
            label={dateText}
            onChange={handleDateChange}
            format="DD-MM-YYYY"
            className={"datePickerDark"}
          />
        ) : (
          <DatePicker
            label={dateText}
            onChange={handleDateChange}
            format="DD-MM-YYYY"
            className={"datePicker"}
          />
        )}
      </LocalizationProvider>
    </Fragment>
  );
};

export default DatePickers;
