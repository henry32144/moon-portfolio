
import React, { useState, forwardRef } from 'react';
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import clsx from "clsx"
import { MODES } from "../constants/constants"

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Flip from 'react-reveal/Flip';
import ChatBox from "./chatbox/chatbox.js"


import MenuBookIcon from '@material-ui/icons/MenuBook';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

const useStyles = makeStyles((theme) => ({
  backgroundCard: {
    zIndex: 10,
    position: "relative",
    backgroundColor: fade(theme.palette.primary.main, 0.3),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    height: "100vh",
    // height: "calc(100vh - 56px)",
    // ["@media (min-width: 0px) and (orientation: landscape)"]: {
    //   height: "calc(100vh - 48px)",
    // },
    // [theme.breakpoints.up('sm')]: {
    //   height: "calc(100vh - 64px)",
    // },
  },
  contentCard: {
    flexGrow: 1,
    zIndex: 10,
    position: "relative",
    backgroundColor: theme.palette.primary.light,
  },
  button: {
    background: theme.palette.primary.light,
  }
}));

const QABlock = forwardRef((props, ref) => {

  const classes = useStyles();
  const {
    id,
    siteTitle,
    model = null,
    loadModel = () => { },
    mode = MODES.READ,
    setMode = () => { } } = props

  const preventDefault = (event) => event.preventDefault();

  return (
    <Card id={id} className={classes.backgroundCard} ref={ref}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          container
          xs={12}
          spacing={2}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            container
            justify="center"
            alignItems="center"
          >
            <Box mt={10}>
              <Typography variant="h4">
                About me
            </Typography>
            </Box>
          </Grid>
          <Grid
            item
          >
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
              <Button
                className={classes.button}
                startIcon={<MenuBookIcon />}
                onClick={() => setMode(MODES.READ)}
              >
                Read
              </Button>
              <Button
                className={classes.button}
                startIcon={<QuestionAnswerIcon />}
                onClick={() => {
                  setMode(MODES.ASK)
                }}
              >
                Ask
              </Button>
            </ButtonGroup>

          </Grid>
          {
            mode === MODES.READ &&
            <Fade in={mode === MODES.READ}>
              <Grid
                item
                md={6}
              >
                <Flip bottom>
                  <Typography variant="h6" component="span">
                    A software engineer who enthusiast at learning and using technology to make the world more interesting.

                    Graduated from Tunghai University in Taiwan. Having experience in both Front-End and Back-End developing, Machine Learning and App developing. Love to try new things, and willing to overcome challenges. Passionate at product making, hope to make things which will improve many people life.
                </Typography>
                </Flip>
              </Grid>
            </Fade>
          }

          {
            mode === MODES.ASK &&
            <Fade in={mode === MODES.ASK}>
              <Grid
                item
                container
                xs={12}
                md={6}
              >
                <ChatBox model={model} loadModel={loadModel} />
              </Grid>
            </Fade>
          }

        </Grid>
      </Grid>
    </Card>
  );
})

QABlock.propTypes = {
}

QABlock.defaultProps = {
}

export default QABlock