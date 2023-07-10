import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DatePicker from "../../components/DatePicker";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useDatePicker from "../../hooks/useDatePicker";
import Container from "@mui/material/Container";
import ROUTES from "../../routes/ROUTES";

const Homepage = () => {
  const navigate = useNavigate();
  const yourChoise = useDatePicker();

  const handleSearchClick = () => {
    let newChoise = yourChoise;
    console.log("yourChoise=> ", newChoise);
    navigate(ROUTES.INVENTORY);
  };

  return (
    <Container maxWidth="lg">
      <Grid container className={"gridContainerHomePage"}>
        <Grid item xs={12}>
          <Typography variant="h1" className="mainHeader">
            Your needs Their Cars
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
              <DatePicker dateText="Pickup Date" />
            </Grid>
            <Grid item xs={12} md={5}>
              <DatePicker dateText="Return Date" />
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
          <Typography variant="body1">Not a memebr? Join here!</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Homepage;
