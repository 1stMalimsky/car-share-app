import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DatePicker from "../components/DatePicker";
import { Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { dateActions } from "../store/dateHandler";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import ROUTES from "../routes/ROUTES";
import { toast } from "react-toastify";

const Homepage = () => {
  const [chosenDates, setChosenDates] = useState({
    start: "",
    end: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentDate = new Date();

  const handleDateChange = (dateText, newDate) => {
    if (newDate == null) {
      return;
    }
    setChosenDates((prevDates) => ({
      ...prevDates,
      [dateText.toLowerCase()]: newDate.$d.getTime(),
    }));
  };

  const handleSearchClick = () => {
    const adjustedCurrentDate = currentDate.setHours(0, 0, 0, 0);
    if (
      isNaN(chosenDates.start) ||
      isNaN(chosenDates.end) ||
      chosenDates.start < adjustedCurrentDate ||
      chosenDates.end < adjustedCurrentDate ||
      chosenDates.start >= chosenDates.end
    ) {
      return toast.error("Please enter valid dates!");
    }
    dispatch(dateActions.setStartDate(chosenDates.start));
    dispatch(dateActions.setEndDate(chosenDates.end));
    dispatch(dateActions.calculateDays());
    navigate(`/car-inv/${chosenDates.start}/${chosenDates.end}`);
  };

  return (
    <Container maxWidth="lg">
      <Grid container className={"gridContainerHomePage"}>
        <Grid item xs={12}>
          <Typography variant="h1" className="mainHeader">
            You(r) need(s) Our Cars
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} className="homepageHeaderBox">
          <Typography variant="h4" color="initial">
            Welcome to CarShare!
          </Typography>
          <Typography
            variant="body2"
            color="initial"
            style={{ fontSize: "1.2rem", padding: 15 }}
          >
            Here you will find a community of people that gladly puts their car
            up for daily hires. We make renting a car more personal than ever.
            Feel free to browse our collections and consider signing up to take
            full advantage of everything we have to offer.
            <br /> Bon Voyage!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ marginLeft: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <DatePicker
                dateText="Pickup Date"
                onChange={(newDate) => handleDateChange("start", newDate)}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <DatePicker
                dateText="Return Date"
                onChange={(newDate) => handleDateChange("end", newDate)}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Button
                variant="contained"
                onClick={handleSearchClick}
                style={{ width: "10em", height: "4em" }}
              >
                <Typography variant="body1" className={"mainButton"}>
                  SEARCH
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" className="homepageSignUpLink">
            Not a memebr?
            <Link to="/register">Join here!</Link>
          </Typography>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Container>
  );
};

export default Homepage;
