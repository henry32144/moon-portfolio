
import React, { useEffect, forwardRef } from 'react';
import PropTypes from "prop-types"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from "clsx"
import { BLOCK_IDS } from "../constants/constants"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 10,
  },
  container: {
    zIndex: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
  },
  transparentBackground: {
    backgroundColor: "rgb(12 24 48 / 0.7)",
  },
  offset: theme.mixins.toolbar,
}));

const HeaderNavBar = React.forwardRef(({ id, siteTitle, position }, ref) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const preventDefault = (event) => event.preventDefault();

  const scrollTo = (block) => {
    const element = document.getElementById(block);
    element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <AppBar
      position={position}
      ref={ref}
      elevation={position === "fixed" ? 4 : 0}
      className={clsx({
        [classes.transparentBackground]: position === "fixed",
      })}
    >
      <Container className={classes.container} maxWidth="lg">
        <Toolbar id={"back-to-top-anchor"}>
          <Typography variant="h6" className={classes.title}>
            <Link color="textPrimary" href="/" onClick={preventDefault} underline="none">
              {matches ? "C.H WU" : siteTitle}
            </Link>
          </Typography>
          <Button color="inherit" onClick={() => scrollTo(BLOCK_IDS.MOON)}>Moon</Button>
          <Button color="inherit" onClick={() => scrollTo(BLOCK_IDS.ABOUT)}>About</Button>
          <Button color="inherit" onClick={() => scrollTo(BLOCK_IDS.PROJECTS)}>Projects</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
});

const Header = ({ siteTitle }) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({ threshold: 64 });

  return (
    <div className={classes.root}>

      {!trigger &&
        <HeaderNavBar siteTitle={siteTitle} position={"static"} />
      }
      <Slide appear={false} direction="down" in={trigger}>
        <HeaderNavBar siteTitle={siteTitle} position={"fixed"} />
      </Slide>
      {trigger &&
        <div className={classes.offset} />
      }
    </div >
  );
}

HeaderNavBar.propTypes = {
  siteTitle: PropTypes.string,
  position: PropTypes.string,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any })
  ])
}

HeaderNavBar.defaultProps = {
  siteTitle: ``,
  position: `static`,
  ref: undefined,
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
