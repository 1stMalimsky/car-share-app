import {
  Typography,
  Container,
  Box,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SortComponent from "../components/SortComponent";
import CarCardComponent from "../components/CarCard/CarCard";
import useSort from "../hooks/useSort";
import axios from "axios";
import { toast } from "react-toastify";

const OurCarsPage = () => {
  const [sortPick, setSortPick] = useState("");
  const [cars, setCars] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [likedCars, setLikedCars] = useState([]);

  const isDarkTheme = useSelector(
    (storePie) => storePie.darkThemeSlice.isDarkTheme
  );
  const thisUser = useSelector((storePie) => storePie.authSlice);

  useEffect(() => {
    axios
      .get("/cars/")
      .then(({ data }) => {
        setCars(data.allCars);
      })
      .catch((err) => {
        console.log("err from axios", err);
        toast.error("Oops! Couldn't load your cards. Please try again");
      });
  }, []);

  useEffect(() => {
    axios
      .get("/user/" + thisUser.payload.userId)
      .then(({ data }) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log("err from axios", err);
        toast.error("Oops! Couldn't load your cards. Please try again");
      });
  }, []);

  const sortBtnClick = (value) => {
    setSortPick(value);
  };
  useSort(sortPick, setCars, cars, sortBtnClick);

  const rentBtnClick = () => {
    console.log("rent btn clicked");
  };

  const likeClick = async (id) => {
    try {
      await axios.patch(`/cars/like/${id}`);
    } catch (err) {
      console.log("like update error", err);
    }
  };

  if (!cars.length === 0) {
    <CircularProgress />;
  }

  return (
    <Container component="main" maxWidth="lg">
      <Box className="registerBox">
        <Box className="ourCarsHeaderBigBox">
          <Grid container>
            <Grid
              item
              xs={12}
              md={7}
              className={isDarkTheme ? "HeaderBoxDark" : "ourCarsHeaderBox"}
            >
              <Typography component="h1" variant="h2" className="pageTitle">
                Our Cars
              </Typography>
              <Typography variant="body1" className="pageSubtitle">
                Interested in browsing our cars? Take a look at our fleet of
                individually owned cars. You can use the side bar to sort the
                cars. Happy huntin'.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container sx={{ display: "flex" }}>
            {/* SIDE MENU */}
            <Grid item xs={3} className="sideGridItem">
              <SortComponent onSortClick={sortBtnClick} />
            </Grid>
            {/* CAR CARD */}
            {cars.map((car) => (
              <Grid
                item
                xs={9}
                className="cardGridItem"
                key={car.title + Date.now()}
              >
                <CarCardComponent
                  id={car._id}
                  user_id={car.user_id}
                  title={car.title}
                  description={car.description}
                  url={car.image.url}
                  alt={car.image.alt}
                  carType={car.carType}
                  carModel={car.carModel}
                  city={car.address.city}
                  street={car.address.street}
                  houseNumber={car.address.houseNumber}
                  phone={car.phone}
                  price={car.price}
                  loggedIn={thisUser.isLoggedIn}
                  handleCheckOutClick={rentBtnClick}
                  handleLikeClick={likeClick}
                  isLiked={
                    car.likes.includes(thisUser.payload.userId) ? true : false
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default OurCarsPage;
