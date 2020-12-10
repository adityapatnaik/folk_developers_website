import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Slide from "@material-ui/core/Slide";
import { useScrollTrigger } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import NotificationsIcon from "@material-ui/icons/Notifications";
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Link from '@material-ui/core/Link';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  menuButton: {
    marginLeft: theme.spacing(0)
  },
  title: {
    justifySelf: "left",
    marginRight: "auto"
  },
  link: {
    textDecoration: "none",
    color: "inherit"
  }
}));

const Navbar = (props) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return (
    <AppBar className={classes.root} elevation={trigger ? 4 : 0}>
      <Toolbar className={classes.toolbar}>
        {/* <Typography variant="h6" className={classes.title}>
          FOLK Developers
        </Typography> */}
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          
            <GitHubIcon color="action" onClick={() => window.open("https://github.com/FOLK-Developers", "_blank")} />
        </IconButton>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <NotificationsIcon color="action" />
        </IconButton>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Brightness4Icon color="action" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
