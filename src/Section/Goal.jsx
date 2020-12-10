// Join our telegram channel
// Goal
import { Grid, Typography, Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
  title:{
      marginBottom:theme.spacing(2),
  },
  body:{
    width:'100%'
  },
  paper:{
     padding: theme.spacing(4)
  }

}));

const Goal = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} >
      <Grid item xs={12} md={12}>
      <Typography className={classes.title} xs={12} variant="h3">Goal</Typography>
      <Paper variant="outlined" className={classes.paper}>
      <Typography className={classes.body} variant="body1" >
      FOLK DEVELOPERS community is an Initiative of FOLK. It is a public community of developers world wide, who simultaneously learn, share and contribute on all technical subject matters.
      </Typography>
      </Paper>
      </Grid>
      {/* <Grid item xs={12} md={6}>
        <Typography variant="h4">Intelligence the World Needs</Typography>
      </Grid> */}
      
    </Grid>
  );
};

export default Goal;
