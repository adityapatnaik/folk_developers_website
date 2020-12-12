import React from "react";
import { Grid } from "@material-ui/core";
import Goal from "../Section/Goal";
import Blog from "../Section/Blog";
import Channels from "../Section/Channels";
import Events from "../Section/Events";
import Projects from "../Section/Projects";
import Team from "../Section/Team";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  section: {
    // backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
    color: theme.palette.text.primary, 
  },
  paper:{
    display:'grid',
    gridTemplateColumns:'1fr',
    // gridGap:theme.spacing(4),
  }

}));

const Content = () => {
  const classes = useStyles();

  return (
    <Grid  item xs={12} sm={12} md={8}>
      <Grid container item className={classes.section}>
        <Goal />
      </Grid>
      <Grid item className={classes.section}>
        <Channels />
      </Grid>
      <Grid item className={classes.section}>
        <Events />
      </Grid>
      <Grid item className={classes.section}>
        <Projects />
      </Grid>
      <Grid item className={classes.section}>
        <Blog />
      </Grid>
      <Grid item className={classes.section}>
        <Team />
      </Grid>
    </Grid>
    // <Grid item className={classes.paper}>
    //   <Goal/>
    //   <Channels/>
    //   <Events/>
    //   <Projects/>
    //   <Blog/>
    //   <Team/>
    // </Grid>
  );
};

export default Content;
