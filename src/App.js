import React from "react";
import "./styles.css";
import Navbar from "./Navbar/Navbar";
import Grid from "@material-ui/core/Grid";
import Content from "./Content/Content";
import { ThemeProvider } from "@material-ui/core/styles/";
import { theme } from "./Theme/Theme";
import TopPanel from './TopPanel/TopPanel'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    // textAlign:'center',
    fontFamily:theme.typography.fontFamily,
  },
 paper:{
  //  display:"grid",
  //  gridTemplate:'auto/1fr 920px 1fr',
  // zIndex:10,
}

  
}));

export default function App() {

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root} >
        <Grid container direction="column" >
          <Grid item>
            <Navbar />
          </Grid>
          <Grid item style={{ height: "3.5rem" }}>
          </Grid>
          <Grid item>
             <TopPanel/>
          </Grid>
         
          <Paper className={classes.paper} elevation={4}>
          <Grid item container md={12}>
            <Grid item sm={2} />
            <Content />
            <Grid item sm={2} />
            </Grid>
            </Paper>
         
         
        </Grid>
      </div>
      <CssBaseline/>
    </ThemeProvider>
  );
}
