import { Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../Images/circularlogo.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import IconButton from "@material-ui/core/IconButton";
import Paper from '@material-ui/core/Paper';
import Banner from "../Images/banner.png";
import Bushes from "../Images/bushes.png";
import {
  YouTube,
  Twitter,
  Telegram,
  LinkedIn,
  Instagram,
  Facebook
} from "../SocialLinks";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffb300",
    backgroundImage:`url(https://blush.design/api/download?shareUri=onCMW0enjv&s=0.1%7EEAC7A8-0.2%7EEAC7A8-0.3%7EB28B67&w=800&h=800&fm=png)`,
    //background: `url(${Banner}) center/cover`,
    backgroundPosition:'center',
    backgroundRepeat: `no-repeat`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    gap: 16,
    color: theme.palette.text.primary
  },
  logo: {
    height: "10em",
    width: "10em",
    resize: "both",
    marginTop:8,
  },
  tag: {
    position:'absolute',
    right:20,
    bottom:110,
    // marginBottom: 16,
    // marginTop: 16,
    fontWeight:"900",
    padding:'1em',
    opacity:'0.9'
  },
  cta: {
    marginBottom: 136
  },
  social: {
    display: "flex",
    alignSelf:'flex-end'
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    unset: "all"
  },
  icon:{
    color:"white",
  }
 
}));

const TopPanel = (props) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <img
        className={classes.logo}
        src={Image}
        alt="logo"
        width="100vw"
        height="100vw"
      />
      <Paper variant="outlined" className={classes.tag}>
      <Typography  variant="h6">
        Intelligence the World Needs
      </Typography>
      </Paper>
      <Button
        variant="contained"
        onClick={() => window.open(Telegram, "_blank")}
        color="secondary"
        className={classes.cta}
        disableElevation
      >
        Join Our Community
      </Button>
      <div className="social">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => window.open(LinkedIn, "_blank")}
        >
          <LinkedInIcon
            
            className={classes.icon}
            
          />
        </IconButton>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => window.open(Twitter, "_blank")}
        >
          <TwitterIcon
            
            className={classes.icon}
            
          />
        </IconButton>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => window.open(Instagram, "_blank")}
        >
          <InstagramIcon
            
            className={classes.icon}
            
          />
        </IconButton>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => window.open(Facebook, "_blank")}
        >
          <FacebookIcon
            
            className={classes.icon}
            
          />
        </IconButton>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => window.open(YouTube, "_blank")}
        >
          <YouTubeIcon
            
            className={classes.icon}
            
          />
        </IconButton>
      </div>
      {/* <img src={Bushes} className={classes.bushes} alt="bush" /> */}
    </Grid>
  );
};

export default TopPanel;
