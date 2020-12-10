import { Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../Images/logo.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import IconButton from "@material-ui/core/IconButton";
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
    backgroundColor: theme.palette.primary.main,
    //backgroundImage:`url(https://blush.design/api/download?shareUri=MZ4xc09UA&s=0.1%7EB28B67-0.2%7EB28B67-0.3%7ED4A181&w=800&h=800&fm=png)`,
    //background: `url(${Banner}) center/cover`,
    backgroundRepeat: `no-repeat`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    gap: 8,
    color: theme.palette.text.primary
  },
  logo: {
    height: "10em",
    width: "10em",
    // right:0,
    // top:300,
    resize: "both"
  },
  tag: {
    //  right:40,
    // top:480,
    marginBottom: 16
  },
  cta: {
    marginBottom: 8
  },
  social: {
    display: "flex"
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    unset: "all"
  },
  // bushes: {
  //   position: "absolute",
  //   width: 400,
  //   bottom: 30,
  //   zIndex: 0
  // }
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
      <Typography className={classes.tag} variant="h4">
        Intelligence the World Needs
      </Typography>
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
            color="action"
            
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
            color="action"
            
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
            color="action"
            
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
            color="action"
            
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
            color="action"
            
          />
        </IconButton>
      </div>
      {/* <img src={Bushes} className={classes.bushes} alt="bush" /> */}
    </Grid>
  );
};

export default TopPanel;
