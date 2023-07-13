import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CircularProgress, Container, Typography } from "@mui/material";
import CheckoutCard from "../components/CheckoutCard/CheckoutCard";
import carCatalog from "../components/CarCard/carCatalog";
import CarCard from "../components/CarCard/CarCard";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const { id } = useParams();
  const [inputState, setInputState] = useState(
    carCatalog.find((car) => car._id == id)
  );
  const [totalPrice, setTotalPrice] = useState("");

  const chosenDates = useSelector((storePie) => storePie.dateSlice);

  useEffect(() => {
    const timeDiff = Math.abs(chosenDates.startDate - chosenDates.endDate);
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const total = inputState.price * daysDiff;
    setTotalPrice(total);
  }, [chosenDates]);

  const navigate = useNavigate();
  const likeClick = () => {};
  const rentBtnClick = (id) => {
    navigate(`/checkout/${id}`);
  };
  if (!inputState) {
    return <CircularProgress />;
  }
  return (
    <Container>
      <Typography variant="h1">Checkout Page</Typography>
      <CheckoutCard
        id={inputState._id}
        title={inputState.title}
        description={inputState.description}
        url={inputState.url}
        alt={inputState.alt}
        carType={inputState.carType}
        carModel={inputState.carModel}
        city={inputState.city}
        street={inputState.street}
        houseNumber={inputState.houseNumber}
        phone={inputState.phone}
        price={inputState.price}
        totalPrice={totalPrice}
        handleLikeClick={likeClick}
        handleCheckOutClick={rentBtnClick}
      />
    </Container>
  );
};

export default CheckoutPage;
