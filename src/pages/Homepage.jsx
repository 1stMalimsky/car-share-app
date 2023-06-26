import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DatePicker from "../components/DatePicker";

import "./homepage.css";

const Homepage = () => {
  return (
    <Box>
      <Grid container spacing={0} className="gridContainerHomePage">
        <Grid item xs={12}>
          <Typography variant="h2">
            Your car, your ride, your adventure
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          className="border"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.39)" }}
        >
          <Typography variant="h4" color="initial">
            Welcome to CarShare!
          </Typography>
          <Typography
            variant="body2"
            color="initial"
            style={{ fontSize: "1.2rem" }}
          >
            Here you will a find community of people that gladly puts their car
            up for daily hires. We make renting a car more personal than ever.
            Feel free to browse our collections and consider signing up to take
            full advantage of everything we have to offer. Bon Voyage!
          </Typography>
        </Grid>
        <Grid item xs={2} className="border"></Grid>
        <Grid item xs={3} className="border">
          <DatePicker />
        </Grid>
        <Grid item xs={3} className="border">
          <DatePicker />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Homepage;
