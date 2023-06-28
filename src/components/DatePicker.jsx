import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Fragment, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useSelector, useDispatch } from "react-redux";

const DatePickers = ({ dateText, dateType }) => {
  const [dateState, setDateState] = useState("");
  const dispatch = useDispatch();

  const handleDateChange = (date) => {
    setDateState(date);
    if (dateType == "start") {
      dispatch(setDateState(date));
    }
    if (dateType == "end") {
      dispatch(setDateState(date));
    }
  };

  return (
    <Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={"Pick a " + dateText}
          value={dateState}
          sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
          onChange={handleDateChange}
        />
        ;
      </LocalizationProvider>
    </Fragment>
  );
};
{
  /* <DateTimePicker
  label={"Pick a " + dateText}
  value={dateState}
  onChange={handleDateChange}
  sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
/>; */
}

export default DatePickers;
