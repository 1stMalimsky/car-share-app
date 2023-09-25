import { useState, useEffect, Fragment } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Modal } from "@mui/material";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CarCardComponent from "./CarCard";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import CarInfoModal from "../CarInfoModal";

const CarCardListView = ({
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
  loggedIn,
  isLiked,
  handleLikeClick,
  handleCheckOutClick,
}) => {
  const [likeStatus, setLikeStatus] = useState(isLiked);
  const [open, setOpen] = useState(false);
  const [ownerProfile, setOwnerData] = useState(null);
  const [modalInfo, setModalInfo] = useState({
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
    loggedIn,
    isLiked,
    handleLikeClick,
    handleCheckOutClick,
  });
  const likeClicked = () => {
    setLikeStatus((prevLikeStatus) => !prevLikeStatus);
    handleLikeClick();
  };

  const ownerData = async (id) => {
    try {
      const { data } = await axios.get("/user/" + user_id);
      delete data.password;
      delete data.address;
      delete data.__v;
      setOwnerData(data);
    } catch (err) {
      console.log("owner Data err", err);
    }
  };

  useEffect(() => {
    ownerData(id);
  }, []);

  const handleCheckOut = () => {
    handleCheckOutClick(id);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!ownerProfile) {
    return <CircularProgress />;
  }

  return (
    <Fragment>
      <Grid container className="cardGridListContainer">
        <Grid
          item
          xs={12}
          sm={10}
          onClick={handleOpen}
          className="cardModalList"
        >
          {/* img item */}
          <Grid item xs={12} sm={2} className="carCardImgItem">
            <img src={url} alt={alt} className="imgURL" />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="body1" component="div">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="body1" component="div">
              Car Type: {carType}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="body1" component="div">
              Price (per day): ₪{price}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={2} className="carCardBtnSection">
          <Button
            variant="contained"
            className="cardBtn"
            onClick={handleCheckOut}
          >
            Rent
          </Button>
          <IconButton
            onClick={likeClicked}
            sx={{ display: loggedIn ? "block" : "none" }}
          >
            {likeStatus ? (
              <FavoriteIcon fontSize="large" />
            ) : (
              <FavoriteBorderIcon fontSize="large" />
            )}
          </IconButton>
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            maxWidth: "50%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CarCardComponent
            id={modalInfo.id}
            user_id={modalInfo.user_id}
            title={modalInfo.title}
            description={modalInfo.description}
            url={modalInfo.url}
            alt={modalInfo.alt}
            carType={modalInfo.carType}
            carModel={modalInfo.carModel}
            city={modalInfo.city}
            street={modalInfo.street}
            houseNumber={modalInfo.houseNumber}
            phone={modalInfo.phone}
            price={modalInfo.price}
            loggedIn={modalInfo.loggedIn}
            isLiked={modalInfo.isLiked}
            handleLikeClick={modalInfo.handleLikeClick}
            handleCheckOutClick={modalInfo.handleCheckOutClick}
          />
        </Box>
      </Modal>
    </Fragment>
  );
};

export default CarCardListView;
