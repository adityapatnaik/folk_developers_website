// Events and Promotions
import React from 'react'
import { Grid, Typography, Card, CardMedia,Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TeamCard from './TeamCard'
const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2)
  },
  cards:{
    [theme.breakpoints.down('md')]:{
      margin: '0 auto 0 auto',
    }
  }

}));

const team= [
  {name:"Chetan", role:"Backend Community Lead & HR"},
  {name:"Aditya Patnaik", role:"WebDev Community Lead"},
  {name:"Prince Keshari", role:"Social Media Community Lead"},
  {name:"Mahesh", role:"DataScience/AI Community Lead"},
  {name:"Vamshi", role:"WebDev Community Lead"},
  {name:"Ashwin", role:"Social Media Community Lead"},
  {name:"Ayurish", role:"Flutter Community Lead"},
  {name:"Mohan", role:"Backend Community Lead"},

  
]

const Team = (props)=>{
    const classes = useStyles()
    
      return(
        <Grid item container >
        <Typography xs={12} className={classes.title} variant="h3">
          Team
        </Typography>
        <Grid container spacing={4} className={classes.cards}>
          {
            team.map((el,index)=>{
              return(
                
                  <TeamCard key={index} name={el.name} role={el.role}/>
              )
            })
          }
         
          </Grid>
        </Grid>
      )

}

export default Team