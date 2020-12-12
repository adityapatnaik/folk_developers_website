import React, { useState } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import Slide from "@material-ui/core/Slide";
import { useScrollTrigger } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import NotificationsIcon from "@material-ui/icons/Notifications";
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Link from '@material-ui/core/Link';
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    backgroundColor: theme.palette.primary,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'flex-end',
    alignItems:'flex-end',
    // flexWrap: 'wrap',
    padding: `0 1em 0 1em`,
  },
  toolbar: {
    marginLeft:"auto"
  },
  tabs:{
   
    // [theme.breakpoints.down('md')]:{
      margin: '0 auto 0 auto',
    // }
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
  },
  tab:{
    minHeight:`0px`,
    maxWidth:`100px`,
    minWidth:`50px`,
    [theme.breakpoints.down('md')]:{
      minHeight:'48px'
    },
    
  },

  icon:{
    color:"white"
  }
}));



function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const Navbar = ({value, setValue}) => {
  const classes = useStyles();


  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar className={classes.root} elevation={trigger ? 4 : 0}>

     <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="#ffffff"
          textColor="#ffffff"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          className={classes.tabs}
        >
          <Tab className={classes.tab} label="Home" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Channels" {...a11yProps(1)} />
          <Tab className={classes.tab} label="Blog" {...a11yProps(2)} />
          <Tab className={classes.tab} label="Events" {...a11yProps(3)} />
          <Tab className={classes.tab} label="Projects" {...a11yProps(4)} />
          <Tab className={classes.tab} label="Team" {...a11yProps(4)} />
        </Tabs>
      
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
          
            <GitHubIcon className={classes.icon} onClick={() => window.open("https://github.com/FOLK-Developers", "_blank")} />
        </IconButton>
        {/* <IconButton
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
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
