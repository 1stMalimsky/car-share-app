import { useState } from "react";
import { Modal, Box } from "@mui/material";
import CarCardComponent from "./CarCard/CarCard";

const CarInfoModal = ({ carInfo }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
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
          id={carInfo.id}
          user_id={carInfo.user_id}
          title={carInfo.title}
          description={carInfo.description}
          url={carInfo.url}
          alt={carInfo.alt}
          carType={carInfo.carType}
          carModel={carInfo.carModel}
          city={carInfo.city}
          street={carInfo.street}
          houseNumber={carInfo.houseNumber}
          phone={carInfo.phone}
          price={carInfo.price}
          loggedIn={carInfo.loggedIn}
          isLiked={carInfo.isLiked}
          handleLikeClick={carInfo.handleLikeClick}
          handleCheckOutClick={carInfo.handleCheckOutClick}
        />
      </Box>
    </Modal>
  );
};

export default CarInfoModal;
