import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GitHubIcon from '@mui/icons-material/GitHub';

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
      <Button className="no-hover-btn"size="small" href={props.link}>
      <IconButton aria-label="github">
         <GitHubIcon />
       </IconButton>
      </Button>
      <Button className="button-tags">{props.tags}</Button>
    </CardActions>
    </Card>
  );
}
export default ProjectCards;
