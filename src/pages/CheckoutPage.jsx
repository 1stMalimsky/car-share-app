import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ExtrasBtn from "../components/EXtrasBtn";
import {
  CircularProgress,
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import CheckoutCard from "../components/CheckoutCard/CheckoutCard";
import axios from "axios";

const CheckoutPage = () => {
  const params = useParams();
  const [inputState, setInputState] = useState(null);
  const [totalPrice, setTotalPrice] = useState("");

  useEffect(() => {
    axios
      .get("/cars/" + params.id)
      .then(({ data }) => {
        setInputState(data);
        console.log("here");
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
  }, []);

  useEffect(() => {
    if (!inputState) {
      return;
    }
    const total = inputState.price * params.numOfDays;
    setTotalPrice(total);
  }, [inputState]);

  const navigate = useNavigate();
  const likeClick = () => {};
  const rentBtnClick = (id) => {
    navigate(`/checkout/${id}`);
  };

  const handleExtraClick = (text, clicked) => {
    console.log("text", text);
    console.log("clicked", clicked);
    const totalInsurance = params.numOfDays * 25;
    const totalSeat = params.numOfDays * 15;
    const totalAdd = params.numOfDays * 30;
    if (clicked) {
      switch (text) {
        case "Insurance":
          setTotalPrice((prevPrice) => prevPrice - totalInsurance);
          break;
        case "Infant Seat":
          setTotalPrice((prevPrice) => prevPrice - totalSeat);
          break;
        case "Additional Driver":
          setTotalPrice((prevPrice) => prevPrice - totalAdd);
          break;
        default:
          setTotalPrice(totalPrice);
      }
    } else {
      switch (text) {
        case "Insurance":
          setTotalPrice((prevPrice) => prevPrice + totalInsurance);
          break;
        case "Infant Seat":
          setTotalPrice((prevPrice) => prevPrice + totalSeat);
          break;
        case "Additional Driver":
          setTotalPrice((prevPrice) => prevPrice + totalAdd);
          break;
        default:
          setTotalPrice(totalPrice);
      }
    }
  };
  if (!inputState || !totalPrice) {
    return <CircularProgress />;
  }
  return (
    <Container>
      <Typography variant="h1">Checkout Page</Typography>
      <Grid container>
        {/* SideBar */}
        <Grid item xs={3}>
          <Typography variant="h5">Add Extras</Typography>
          <ExtrasBtn text="Insurance" onClick={handleExtraClick} />
          <ExtrasBtn text="Infant Seat" onClick={handleExtraClick} />
          <ExtrasBtn text="Additional Driver" onClick={handleExtraClick} />
        </Grid>
        {/* Main */}
        <Grid item xs={9}>
          <CheckoutCard
            id={inputState._id}
            user_id={inputState.user_id}
            title={inputState.title}
            description={inputState.description}
            url={inputState.image.url}
            alt={inputState.image.alt}
            carType={inputState.carType}
            carModel={inputState.address.carModel}
            city={inputState.address.city}
            street={inputState.address.street}
            houseNumber={inputState.address.houseNumber}
            phone={inputState.phone}
            price={inputState.price}
            totalPrice={totalPrice}
            handleLikeClick={likeClick}
            handleCheckOutClick={rentBtnClick}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
