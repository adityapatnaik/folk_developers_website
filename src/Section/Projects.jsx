// Events and Promotions

import React from 'react'
import { Grid, Typography, Card, CardMedia,Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from './ProjectCard'
const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2)
  },

}));

const projects = [
  {name:"Community DB"},
  {name:"Music App"},
  {name:"Publication"},
]

const Projects = (props)=>{
    const classes = useStyles()
    
      return(
        <Grid item container>
        <Typography xs={12} className={classes.title} variant="h3">
          Projects
        </Typography>
        <Grid container spacing={4}>
          {
            projects.map((el,index)=>{
              return(
                
                  <ProjectCard key={index} name={el.name}/>
              )
            })
          }
         
          </Grid>
        </Grid>
      )

}

export default Projects