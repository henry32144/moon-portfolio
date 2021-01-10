
import React, { useState, forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { PROJECTS } from "../constants/projects"

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ProjectItem from "./project-item.js"

const useStyles = makeStyles((theme) => ({
  backgroundCard: {
    zIndex: 10,
    position: "relative",
    backgroundColor: fade(theme.palette.primary.main, 0),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  projectPaper: {
    backgroundColor: fade(theme.palette.primary.main, 0.3),
  },
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  projectContainer: {
    marginTop: theme.spacing(6)
  },
  moreButton: {
    background: theme.palette.primary.light,
    color: "#fff"
  }
}));

const ProjectBlock = forwardRef((props, ref) => {
  const MODES = {
    READ: 0,
    ASK: 1,
  }
  const classes = useStyles();
  const { id, siteTitle, model, loadModel } = props
  const preventDefault = (event) => event.preventDefault();
  const [mode, setMode] = useState(MODES.READ);

  const [projects, setProjects] = useState(PROJECTS);


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
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Box mt={10}>
              <Typography variant="h4">
                Projects
            </Typography>
            </Box>
            <Grid className={classes.projectContainer} container item xs={12} sm={10} spacing={2}>
              {projects.map((project, index) =>
                <ProjectItem
                  key={project.url}
                  title={project.title}
                  description={project.description}
                  url={project.url}
                  image={project.image}
                />
              )}
            </Grid>
            <Box mt={6}>
              <Button
                className={classes.moreButton}
                size="large"
                variant="contained"
                color="secondary"
                onClick={() => { window.open("https://henry32144.github.io/hugo-website/projects/", "_blank") }}
              >
                More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Card >
  );
})

ProjectBlock.propTypes = {
}

ProjectBlock.defaultProps = {
}

export default ProjectBlock