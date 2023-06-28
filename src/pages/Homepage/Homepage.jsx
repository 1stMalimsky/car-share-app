import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DatePicker from "../../components/DatePicker";
import { Button } from "@mui/material";

const Homepage = () => {
  return (
    <Box>
      <Grid container spacing={2} className={"gridContainerHomePage"}>
        <Grid item xs={12} className={"border"}>
          <Typography variant="h1" className="mainHeader">
            Your needs Our Cars
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ backgroundColor: "rgba(255, 255, 255, 0.39)" }}
        >
          <Typography variant="h4" color="initial">
            Welcome to CarShare!
          </Typography>
          <Typography
            variant="body2"
            color="initial"
            style={{ fontSize: "1.2rem", padding: 15 }}
          >
            Here you will a find community of people that gladly puts their car
            up for daily hires. We make renting a car more personal than ever.
            Feel free to browse our collections and consider signing up to take
            full advantage of everything we have to offer.
            <br /> Bon Voyage!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <DatePicker dateText="start date" />
            </Grid>
            <Grid item xs={12} md={4}>
              <DatePicker dateText="return date" />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                variant="contained"
                style={{ width: "10em", height: "4em" }}
              >
                SEARCH
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Not a memebr? Join here!</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Homepage;
