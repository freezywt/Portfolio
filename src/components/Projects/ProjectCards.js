import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

function ProjectCards(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="194"
      image={props.imgPath}
      alt="card-img"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
      {props.title}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <Button size="small" href={props.link}>Github</Button>
    </CardActions>
    </Card>
  );
}
export default ProjectCards;
