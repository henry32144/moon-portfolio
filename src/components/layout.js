/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from "clsx"

import Box from '@material-ui/core/Box';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

import Header from "./header"
import "./layout.css"
import theme from "./theme.js"

import stars from "../images/stars.png"

const useStyles = makeStyles((theme) => ({
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
  stars: {
    background: `url(${stars}) repeat top center`,
    zIndex: 0,
  },
  toTop: {
    position: "fixed",
    right: theme.spacing(3),
    bottom: theme.spacing(3),
    width: 44,
    height: 44,
    zIndex: 20,
  }
})
);

function ScrollTop(props) {
  const { children, window } = props;

  const handleClick = (event) => {
    const anchor = document.querySelector('#moon-block');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div onClick={handleClick} role="presentation">
      {children}
    </div>

  );
}

const Layout = (props) => {
  const classes = useStyles();
  const { children } = props
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  return (
    <CssBaseline >
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

          <main style={{ position: "relative" }}>
            {children}
            <Box className={clsx(classes.baseEffect, classes.stars)} />
          </main>

          <footer style={{
            marginTop: `2rem`,
            marginBottom: `2rem`,
            color: "white",
            textAlign: "center"
          }}>
            Cheng-Han Wu © {new Date().getFullYear()}
          </footer>
          <ScrollTop {...props}>
            <Zoom in={trigger}>
              <Fab className={classes.toTop} color="secondary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
              </Fab>
            </Zoom>
          </ScrollTop>
        </SnackbarProvider>
      </ThemeProvider>
    </CssBaseline>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
