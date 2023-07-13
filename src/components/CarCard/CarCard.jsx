import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Avatar } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const CarCardComponent = ({
  id,
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
  handleLikeClick,
  handleCheckOutClick,
}) => {
  const [likeStatus, setLikeStatus] = useState(false);

  const likeClicked = () => {
    handleLikeClick();
    setLikeStatus(!likeStatus);
  };

  const handleCheckOut = () => {
    handleCheckOutClick(id);
  };

  return (
    <Grid container className="cardGridContainer">
      {/* img item */}
      <Grid item xs={5} className="carCardImgItem">
        <img src={url} alt={alt} className="imgURL" />
      </Grid>

      <Grid item xs={7}>
        <Grid container sx={{ display: "flex", flexDirection: "row" }}>
          {/* title and description */}
          <Grid item xs={12} className="carCardItem">
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
      <Grid item xs={12} className="carCardBtnSection">
        <Button
          variant="contained"
          className="cardBtn"
          onClick={handleCheckOut}
        >
          Rent
        </Button>
        <IconButton onClick={likeClicked}>
          {!likeStatus ? (
            <FavoriteBorderIcon fontSize="large" />
          ) : (
            <FavoriteIcon fontSize="large" />
          )}
        </IconButton>
        <div className="profileAv">
          <Typography variant="h6">About the owner</Typography>
          <IconButton>
            <Avatar>
              <AccountBoxIcon />
            </Avatar>
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
};

export default CarCardComponent;
