import React from "react";
import { Grid, Typography, Card, CardMedia,Paper } from "@material-ui/core";
import Image from "../Images/chan.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    width: `clamp(200px,350px,500px)`,
    height: 300,
    display: "flex",
    flexDirection:'column',
    gap:8,
    justifyContent:'flex-start',
    alignItems:"center"
  },
  cover: {
    width: "100%",
    height: "80%"
  }
}));

const ProjectCard = ({ name,url }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Paper className={classes.card}>
        <img src={url} className={classes.cover} alt="hey" />
        <Typography variant="h5">{name}</Typography>
      </Paper>
    </Grid>
  );
};

export default ProjectCard;
