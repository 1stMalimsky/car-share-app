import { useState, useEffect } from "react";
import {
  CircularProgress,
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ROUTES from "../routes/ROUTES";
import validateEditSchema, {
  validateEditCardParamsSchema,
} from "../validation/editValidation";
import atom from "../logo.svg";
import { toast } from "react-toastify";
import cardInputs from "../utils/cardInputs";
import EditCardInput from "../components/EditCardInputs";

const AddNewCarPage = () => {
  const [inputState, setInputState] = useState({});

  const [inputsErrorsState, setInputsErrorsState] = useState("");
  const navigate = useNavigate();

  const handleSaveBtnClick = async (ev) => {
    try {
      //const { bookedDates, ...updatedInputState } = inputState;
      const joiResponse = validateEditSchema(inputState);
      console.log("joi Response", joiResponse);
      setInputsErrorsState(joiResponse);
      if (!joiResponse) {
        await axios.post("/cars/", inputState);
        toast.success("New Car Added!");
        navigate(ROUTES.MYCARS);
      }
    } catch (err) {
      console.log(err);
      toast.error("Couldn't add car. Please try again");
    }
  };

  const handleCancelBtnClick = () => {
    navigate(ROUTES.MYCARS);
  };
  const handleInputChange = (ev) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState[ev.target.id] = ev.target.value;
    setInputState(newInputState);
  };

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <EditIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add New Car
        </Typography>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt={inputState.alt ? inputState.alt : ""}
          src={inputState.url ? inputState.url : atom}
        />
        <Box component="div" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {cardInputs.map((item) => (
              <Grid item xs={12} sm={6} key={item.inputName + "AddCardPage"}>
                {item.stateName === "description" ? (
                  <TextField
                    label={item.inputName}
                    required={true}
                    value={inputState[item.stateName]}
                    id={item.stateName}
                    onChange={handleInputChange}
                    multiline
                    fullWidth
                  />
                ) : (
                  <EditCardInput
                    input={item.stateName}
                    label={item.inputName}
                    required={true}
                    value={inputState[item.stateName]}
                    id={item.stateName}
                    onChange={handleInputChange}
                  />
                )}
                {inputsErrorsState && inputsErrorsState[item.stateName] && (
                  <Alert severity="warning">
                    {inputsErrorsState[item.stateName].map((err) => (
                      <div key={item.stateName + err}>{err}</div>
                    ))}
                  </Alert>
                )}
              </Grid>
            ))}
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSaveBtnClick}
              >
                Save
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleCancelBtnClick}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default AddNewCarPage;
