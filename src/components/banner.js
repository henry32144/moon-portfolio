
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx"

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

import avatar from "../images/avatar.jpg"
import twinkling from "../images/twinkling.png"
import cloud from "../images/clouds3.png"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "calc(100vh - 56px)",
    ["@media (min-width: 0px) and (orientation: landscape)"]: {
      height: "calc(100vh - 48px)",
    },
    [theme.breakpoints.up('sm')]: {
      height: "calc(100vh - 64px)",
    },
  },
  container: {
    flexGrow: 1,
    height: "100%",
  },
  avatar: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    margin: "0 auto",
    borderRadius: "50%",
  },
  moon: {
    width: "200px",
    height: "200px",
    borderRadius: "100%",
    background: "#ddd",
    margin: "0 auto",
    transition: "1s",
    position: "absolute",
    boxShadow: "0 0 50px rgb(255 215 0 / 0.75), 0 0 150px rgb(255 215 0 / 0.75), inset 0 20px 20px 20px rgb(245 245 245 / 0.5), inset 30px 0 35px 11px rgb(255 255 240 / 0.5)",
    "&:hover": {
      boxShadow: "0 0 0px tomato,0 0 0px orange, inset 0 0px 0px 0px #ddd, inset 0px 0 0px 0px #ccc",
      background: "rgb(0,0,0,0)",
      transition: "1s",
    }
  },
  iconContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  icon: {
    fontSize: 44,
    color: theme.palette.secondary.main,
    transition: "transform .2s", /* Animation */
    "&:hover": {
      transform: "scale(1.25)",
    },
  },
  introduceText: {
    color: "#fff"
  },
  baseEffect: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100%",
    height: "100%",
    display: "block",
  },
  twinkling: {
    height: "513px",
    background: `url(${twinkling}) repeat top center`,
    zIndex: 1,
    "-moz-animation": "move-twink-back 200s linear infinite",
    "-ms-animation": "move-twink-back 200s linear infinite",
    "-o-animation": "move-twink-back 200s linear infinite",
    "-webkit-animation": "move-twink-back 200s linear infinite",
    "animation": "move-twink-back 200s linear infinite",
  },
  clouds: {
    background: `url(${cloud}) repeat-x`,
    zIndex: 2,
    "-moz-animation": "move-clouds-back 200s linear infinite",
    "-ms-animation": "move-clouds-back 200s linear infinite",
    "-o-animation": "move-clouds-back 200s linear infinite",
    "-webkit-animation": "move-clouds-back 200s linear infinite",
    "animation": "move-clouds-back 200s linear infinite",
  },
}));

const Banner = (props) => {
  const classes = useStyles();

  const { id, siteTitle, setBannerHeight = () => { } } = props

  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    console.log(ref.current.clientHeight);
    setHeight(ref.current.clientHeight)
    setBannerHeight(ref.current.clientHeight);
  })

  const preventDefault = (event) => event.preventDefault();

  return (
    <Box className={classes.root} id={id}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        ref={ref}
        className={classes.container}
      >
        <Grid
          item
          xs={12}
          sm={12}
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ zIndex: 10, }}
        >
          <Grid item>
            <a href="https://henry32144.github.io/hugo-website/">
              <Box className={classes.moon} />
              <img className={classes.avatar} alt="CHENGHAN WU" src={avatar} />
            </a>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.iconContainer}
            spacing={1}
          >
            <Grid item>
              <a href="mailto:henry3214456@gmail.com">
                <EmailIcon className={classes.icon} />
              </a>
            </Grid>
            <Grid item>
              <a href="https://www.linkedin.com/in/cheng-han-wu-0803/?locale=en_US">
                <LinkedInIcon className={classes.icon} />
              </a>
            </Grid>
            <Grid item>
              <a href="https://github.com/henry32144">
                <GitHubIcon style={{ fontSize: "36px" }} className={classes.icon} />
              </a>
            </Grid>
            <Grid item>
              <a href="https://drive.google.com/file/d/1ZyHNY8QgwGa0M16bipT4JPGg403CbADK/view?usp=sharing">
                <DescriptionIcon style={{ fontSize: "36px" }} className={classes.icon} />
              </a>
            </Grid>
          </Grid>
          <Grid
            item
            xs={10}
            sm={8}
            style={{ zIndex: 10, }}
          >
            <Typography variant="h6" className={classes.introduceText} >
              FullStack Developer, Machine Learning Enthusiast, Gamer.
          </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Box className={clsx(classes.baseEffect, classes.clouds)} style={{ height: `${height}px` }} />
      <Box className={clsx(classes.baseEffect, classes.twinkling)} />
    </Box >
  );
}

Banner.propTypes = {
}

Banner.defaultProps = {
}

export default Banner