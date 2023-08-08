import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import SortComponent from "../components/SortComponent";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CarCardComponent from "../components/CarCard/CarCard";
import carCatalog from "../components/CarCard/carCatalog";
import useSort from "../hooks/useSort";
import { useSelector } from "react-redux";
import DatePicker from "../components/DatePicker";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CarInv = () => {
  /* const [likedCarsArr, setLikedCars] = useState(""); */
  const [sortPick, setSortPick] = useState("");
  const [cars, setCars] = useState(carCatalog);
  const [sideBarDates, setSideBarDates] = useState("");
  const chosenDates = useSelector((storePie) => storePie.dateSlice);

  const navigate = useNavigate();

  const handleDateChange = (dateText, newDate) => {
    if (newDate == null) {
      return;
    }
    setSideBarDates((prevDates) => ({
      ...prevDates,
      [dateText.toLowerCase()]: newDate.$d.getTime(),
    }));
  };

  const carSearch = async (chosenDates) => {
    try {
      const availableCars = await axios.get(
        `/${chosenDates.start}/${chosenDates.end}`
      );
    } catch (err) {
      console.log("carSearch err", err);
    }
  };

  useEffect(() => {
    carSearch(chosenDates);
  }, [chosenDates]);

  /* useEffect(() => {
    const filteredCars = cars.filter((car) => {
      return car.bookedDates.some(
        (bookedDate) =>
          bookedDate.start == null ||
          (chosenDates.startDate < bookedDate.start &&
            chosenDates.endDate < bookedDate.start) ||
          (chosenDates.startDate > bookedDate.end &&
            chosenDates.endDate > bookedDate.end) ||
          (chosenDates.startDate > bookedDate.start &&
            chosenDates.endDate < bookedDate.end)
      );
    });
    setCars(filteredCars);
  }, [chosenDates]); */

  const sortBtnClick = (value) => {
    setSortPick(value);
  };
  useSort(sortPick, setCars, cars, sortBtnClick);

  const likeClick = () => {};

  const rentBtnClick = (id) => {
    navigate(`/checkout/${id}`);
  };

  return (
    <Box>
      <Grid container sx={{ display: "flex" }}>
        {/* HEADER */}
        <Grid item xs={12} className="headerGridItem"></Grid>
        {/* SIDE MENU */}
        <Grid item xs={3} className="sideGridItem">
          <SortComponent onSortClick={sortBtnClick} />
          <DatePicker
            dateText="Pickup Date"
            onChange={handleDateChange}
            value={sideBarDates.start}
          />
          <DatePicker
            dateText="Return Date"
            onChange={handleDateChange}
            value={sideBarDates.end}
          />
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
              title={car.title}
              description={car.description}
              url={car.url}
              alt={car.alt}
              carType={car.carType}
              carModel={car.carModel}
              city={car.city}
              street={car.street}
              houseNumber={car.houseNumber}
              phone={car.phone}
              price={car.price}
              handleCheckOutClick={rentBtnClick}
              /* isLiked={
                likedCarsArr.find(
                  (card) =>
                    card.carId == car.id && car.userIds.includes(userId)
                )
                  ? true
                  : false
              } */
              handleLikeClick={likeClick}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CarInv;
