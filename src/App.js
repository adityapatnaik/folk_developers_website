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
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Goal from "./Section/Goal";
import Blog from "./Section/Blog";
import Channels from "./Section/Channels";
import Events from "./Section/Events";
import Projects from "./Section/Projects";
import Team from "./Section/Team";


//First Commit

//run "serve -s build" to run the project in the production.

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


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function App() {

  const classes = useStyles()
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root} >
        <Grid container direction="column" >
          <Grid item>
            <Navbar value={value} setValue={setValue} />
          </Grid>
          <Grid item style={{ height: "3.5rem" }}>
          </Grid>
          <Grid item >
             <TopPanel/>
          </Grid>
         
          <Paper className={classes.paper} elevation={4}>
          <Grid item container md={12}>
            <Grid item sm={2} />
            {/* <Content /> */}
            <Grid  item xs={12} sm={12} md={8}>
              <TabPanel value={value} index={0} dir={theme.direction}>
              <Goal/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
            <Channels/>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
            <Blog/>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
            <Events/>
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
            <Projects/>
            </TabPanel>
            <TabPanel value={value} index={5} dir={theme.direction}>
            <Team/>
            </TabPanel>
        </Grid>
            <Grid item sm={2} />
            </Grid>
            </Paper>
         
         
        </Grid>
      </div>
      <CssBaseline/>
    </ThemeProvider>
  );
}
