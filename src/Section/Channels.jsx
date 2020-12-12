import React from "react";
import ChannelCard from "./ChannelCard";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Card, CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2)
  },
  channels: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "flex-start",
    gap: theme.spacing(4)
  }
}));

const channels = [
  { name: "Web Dev", url: "react" },
  { name: "Python", url: "python" },
  { name: "DataScience/AI", url: "tensor" },
  { name: "App Dev", url: "flutter" },
  { name: "Backend Dev", url: "backend" }
];

const Channels = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={6}>
        <Typography className={classes.title} xs={12} variant="h3">
          Channels
        </Typography>
      </Grid>
      <Grid className={classes.channels} container item xs={12}>
        {channels.map((el, index) => {
          return <ChannelCard key={index} name={el.name} url={el.url} />;
        })}
      </Grid>
    </Grid>
  );
};

export default Channels;
