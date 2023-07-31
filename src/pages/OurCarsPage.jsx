import { Typography, Container, Box, Grid } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

const OurCarsPage = () => {
  const isDarkTheme = useSelector((storePie) => storePie.isDarkTheme);

  return (
    <Container component="main" maxWidth="lg">
      <Box className="ourCarsBox">
        <Box className="ourCarsHeaderBox">
          <Grid container>
            <Grid
              item
              xs={12}
              md={7}
              className={
                isDarkTheme ? "registerHeaderBoxDark" : "registerHeaderBox"
              }
            >
              <Typography component="h1" variant="h3" className="ourCarsHeader">
                Register Page
              </Typography>
              <Typography variant="body1" className="registerHeader">
                Let's get started!If you'd like to join our community, we'll
                need some basic information about you. Please fill in the boxes
                below.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default OurCarsPage;
