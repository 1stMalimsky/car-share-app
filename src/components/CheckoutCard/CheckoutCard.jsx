import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { CircularProgress } from "@mui/material";
import AboutOwnerExpand from "../AboutOwnerExpand";
import axios from "axios";

const CheckoutCard = ({
  id,
  user_id,
  title,
  description,
  url,
  alt,
  carType,
  carModel,
  city,
  street,
  houseNumber,
  phone,
  price,
  totalPrice,
  handleLikeClick,
  handleCheckOutClick,
}) => {
  const [likeStatus, setLikeStatus] = useState(false);
  const [ownerProfile, setOwnerProfile] = useState(null);

  useEffect(() => {
    axios
      .get(`/user/${user_id}`)
      .then(({ data }) => {
        setOwnerProfile(data);
      })
      .catch((err) => {
        console.log("error from axios", err);
      });
  }, []);

  const likeClicked = () => {
    handleLikeClick();
    setLikeStatus(!likeStatus);
  };

  const handleCheckOut = () => {
    handleCheckOutClick(id);
  };

  if (!ownerProfile) {
    return <CircularProgress />;
  }

  return (
    <Grid container className="checkoutCardGridContainer">
      {/* img item */}
      <Grid item xs={5} className="checkoutCarCardImgItem">
        <img src={url} alt={alt} className="checkoutImgURL" />
      </Grid>
      <Grid item xs={7}>
        <Grid container sx={{ display: "flex", flexDirection: "row" }}>
          {/* title and description */}
          <Grid item xs={12} className="checkoutCarCardItem">
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2">Description: {description}</Typography>
          </Grid>
          {/* car details */}
          <Grid item xs={6}>
            <Typography variant="body2">
              Car Type: {carType}
              <br />
              Car Model: {carModel}
              <br />
              Phone: {phone}
              <br />
              Price (per day): {price} ILS
            </Typography>
          </Grid>
          {/* location details */}
          <Grid item xs={6}>
            <Typography variant="body2">
              <span style={{ textDecoration: "underline" }}>Location</span>
              <br />
              City: {city}
              <br />
              Street: {street}
              <br />
              House Number: {houseNumber}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* buttons */}
      <Grid item xs={6} className="checkoutCarCardBtnSection">
        <Button
          variant="contained"
          className="checkoutCardBtn"
          onClick={handleCheckOut}
        >
          Rent
        </Button>
        <IconButton onClick={likeClicked} className="checkoutCardBtn">
          {!likeStatus ? (
            <FavoriteBorderIcon fontSize="large" />
          ) : (
            <FavoriteIcon fontSize="large" />
          )}
        </IconButton>
        <AboutOwnerExpand
          ownerProfile={ownerProfile}
          className="checkoutCardBtn"
        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3} className="checkoutPrice">
        <Typography variant="h6">
          Your Total price is:
          <br />
          {totalPrice} ILS
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CheckoutCard;
