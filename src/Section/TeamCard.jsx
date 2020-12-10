import React from "react";
import { Grid, Typography, Card, CardMedia,Paper } from "@material-ui/core";
import Image from "../Images/chan.png";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 150,
    height: 180,
    display: "flex",
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:"center",
    textAlign:"center",
    borderRadius:theme.spacing(1),
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]:{
      width:150
    }
  },
  cover: {
    width: "100%",
    height: "80%"
  },
  avatar:{
    width: theme.spacing(7),
    height: theme.spacing(7),
marginBottom: theme.spacing(2)
  }
}));

const TeamCard = ({ name,role }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Paper variant="outlined" className={classes.card}>
      <Avatar alt="Remy Sharp" src={Image} className={classes.avatar} />
      <Typography variant="body1">{name}</Typography>
      <Typography variant="caption">{role}</Typography>
      </Paper>
    </Grid>
  );
};

export default TeamCard;
