import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import CarCardComponent from "../components/CarCard/CarCard";

const CarInv = () => {
  const [showProgress, setShowProgress] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgress(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <CarCardComponent image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95mEcEynb2rMhfTxosjFSMVr2CkmVTlvtKA&usqp=CAU" />
    </Box>
  );
};

export default CarInv;
