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
import { toast } from "react-toastify";

const CarInv = () => {
  /* const [likedCarsArr, setLikedCars] = useState(""); */
  const [sortPick, setSortPick] = useState("");
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [sideBarDates, setSideBarDates] = useState("");
  let chosenDates = useSelector((storePie) => storePie.dateSlice) || {};

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/cars/");
        console.log("cars", data.allCars);
        setCars(data.allCars);
      } catch (err) {
        console.log("err from axios", err);
        toast.error("Oops! Couldn't load your cars. Please try again");
      }
    };

    fetchData();
  }, [chosenDates]);

  useEffect(() => {
    console.log("chosen dates", chosenDates);

    /* const filteredCars = cars.filter((car) => {
      return car.bookedDates.some(
        (bookedDate) =>
          bookedDate !== null ||
          (chosenDates.startDate <= bookedDate.start &&
            chosenDates.endDate >= bookedDate.end) ||
          (chosenDates.startDate >= bookedDate.start &&
            chosenDates.endDate <= bookedDate.end) ||
          (chosenDates.startDate >= bookedDate.start &&
            chosenDates.endDate <= bookedDate.start &&
            chosenDates.endDate >= bookedDate.end) ||
          (chosenDates.startDate <= bookedDate.start &&
            chosenDates.endDate <= bookedDate.end &&
            chosenDates.startDate >= bookedDate.end) ||
          (chosenDates.startDate == bookedDate.start &&
            chosenDates.endDate == bookedDate.end)
      );
    }); */
    const filteredCars = cars.filter((car) => {
      return car.bookedDates.some(
        (bookedDate) =>
          bookedDate !== null ||
          // Conditions for overlap
          (chosenDates.startDate <= bookedDate.start &&
            chosenDates.startDate >= bookedDate.end) ||
          (chosenDates.endDate <= bookedDate.start &&
            chosenDates.endDate >= bookedDate.end) ||
          (chosenDates.startDate >= bookedDate.start &&
            chosenDates.endDate <= bookedDate.end) ||
          (chosenDates.startDate == bookedDate.start &&
            chosenDates.endDate == bookedDate.end)
      );
    });

    setFilteredCars(filteredCars);
    console.log("filtered cars", filteredCars);
  }, [chosenDates, cars]);

  const sortBtnClick = (value) => {
    setSortPick(value);
  };
  useSort(sortPick, setCars, cars, sortBtnClick);

  const likeClick = () => {};

  const rentBtnClick = (id) => {
    navigate(`/checkout/${id}`);
  };

  if (cars.length === 0 || !chosenDates) {
    return <CircularProgress />;
  }

  /*  const carSearch = async (dates) => {
    console.log("Chosen dates", dates);
    try {
      console.log("chosenDates inside", dates.startDate, dates.endDate);
      const { data } = await axios.get(
        `/cars/${dates.startDate}/${dates.endDate}`
      );
      console.log("available cars", data);
      setCars(data);
    } catch (err) {
      console.log("carSearch err", err);
    }
  }; 
  useEffect(() => {
    if (!chosenDates) {
      return;
    }
    carSearch(chosenDates);
  }, [chosenDates]); */

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
        {filteredCars.map((car) => (
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
