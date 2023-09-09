import React, { useState } from "react";
import { Modal, Button, Typography, Box } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const AboutOwnerExpand = ({ ownerProfile }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        className="cardBtn"
        onClick={handleOpen}
        startIcon={<AccountBoxIcon />}
      >
        About The Owner
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "40%",
            backgroundColor: "white",
          }}
        >
          <Typography component="h3" variant="h4">
            About The Owner
          </Typography>
          <img
            src={ownerProfile.image.url}
            alt={ownerProfile.image.alt}
            className="smallImg"
          />
          <Typography variant="body1">
            Name: {ownerProfile.name.firstName} {ownerProfile.name.lastName}
            <br />
            Phone Number: {ownerProfile.phone}
            <br />
            Email address: {ownerProfile.email}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default AboutOwnerExpand;
