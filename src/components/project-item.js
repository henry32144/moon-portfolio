import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from "@material-ui/core/Box"
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Link from '@material-ui/core/Link';
import Fade from 'react-reveal/Fade';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: 370
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
  image: {
    width: 300,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ProjectItem = (props) => {
  const classes = useStyles();
  const { title = "", description = "", url = "", image = "" } = props

  const cardOnClick = (url) => {
    window.open(url, "_blank")
  }

  return (
    <Grid item md={4} >

      <CardActionArea onClick={() => cardOnClick(url)}>
        <Fade bottom>
          <Card className={classes.root}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom color="textSecondary" variant="h6" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </Card>
        </Fade>
      </CardActionArea>

    </Grid>
  );
}

export default ProjectItem