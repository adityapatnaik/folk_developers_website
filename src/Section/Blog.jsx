import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme)=>({
  root:{
      display:'grid',
      flexDirection:'column'
  },
  grid: {
    display: "grid",
    gridGap: theme.spacing(2),
    gridTemplateColumns:'repeat(auto-fit,minmax(20em,1fr))',
    gridAutoFlow:'row',
   
  },
  media: {
    height: 256,
    // width: "100%",
    resize:"both"
  },
  card:{
   minWidth:`300px`
  },
  title:{
    marginBottom:theme.spacing(2),
  },
  link:{
    textDecoration:'none',
    color:'inherit'
  }
}));

const Blog = (props) => {
  const classes = useStyles();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/folkdevelopers"
      )
      .then((res) => {
        setArticles(res.data.items);
        console.log(articles, res.data.items);
      })
      .catch((err) => {});
  }, []);

  return (
    <Grid item container className={classes.root}>
       <Typography className={classes.title} xs={12} variant="h3">Blog</Typography>
    <div className={classes.grid}>
      {articles.map((el, index) => {
        return (
          <div className={classes.card} key={index} onClick={() => window.open(el.link, "_blank")} >
            <Paper variant="outlined" >
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={el.thumbnail}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {el.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {el.author}
                    <br />
                    {el.pubDate.slice(0, 10)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Paper>
          </div>
        );
      })}
    </div>
    </Grid>
  );
};

export default Blog;
