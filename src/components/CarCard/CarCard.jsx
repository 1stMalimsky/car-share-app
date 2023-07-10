import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import mercedesImg1 from "../../assets/imgs/carImgs/Mercedes.jpeg";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

const CarCardComponent = (imageUrl) => {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <Grid container sx={{ display: "flex" }}>
        <Grid item xs={5} className="carCardGrid">
          <CardMedia>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95mEcEynb2rMhfTxosjFSMVr2CkmVTlvtKA&usqp=CAU"
              alt="merc"
              className="carImg"
            />
          </CardMedia>
        </Grid>
        <Grid item xs={6} className="carCardGrid">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={6} className="carCardGrid">
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CarCardComponent;
