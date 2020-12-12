// Events and Promotions

import React from 'react'
import { Grid, Typography, Card, CardMedia,Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EventCard from './EventCard'
const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2)
  },

}));

const events = [
  {name:"Bi Weekly Python Sessions", url:"https://robohash.org/abc"},
  {name:"Executive Board Meet", url:"https://robohash.org/efg"},
  {name:"Developers Sunday", url:"https://robohash.org/hij"},
]

const Events = (props)=>{
    const classes = useStyles()
    
      return(
        <Grid item container>
        <Typography xs={12} className={classes.title} variant="h3">
          Events
        </Typography>
        <Grid container spacing={4}>
          {
            events.map((el,index)=>{
              return(
                
                  <EventCard key={index} name={el.name} url={el.url}/>
              )
            })
          }
         
          </Grid>
        </Grid>
      )

}

export default Events