import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Waypoint } from 'react-waypoint';
import { MODES, BLOCK_IDS } from "../constants/constants"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Banner from "../components/banner"
import AboutBlock from "../components/about-block"
import ProjectBlock from "../components/project-block"
import ConfirmDialog from '../components/dialog/confirm-dialog.js';

import Container from '@material-ui/core/Container';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Slide from "react-reveal/Slide";

import * as qna from '@tensorflow-models/qna';

const IndexPage = () => {


  const [model, setModel] = useState(null);
  const [bannerHeight, setBannerHeight] = useState(896);
  const [mode, setMode] = useState(MODES.READ);

  const [openConfirmDialog, setConfirmDialogOpen] = useState(false);

  const handleConfirmDialogClose = (confirm) => {
    if (confirm) {
      setMode(MODES.ASK)
    }
    setConfirmDialogOpen(false);
  }

  const modeSwitch = (mode) => {
    if (mode === MODES.ASK && model === null) {
      setConfirmDialogOpen(true);
    } else {
      setMode(mode)
    }
  }

  const loadModel = async () => {
    const model = await qna.load();
    setModel(model);
  }

  return (
    <Layout>
      <Container maxWidth="lg" style={{ zIndex: 10 }}>
        <SEO title="Home" />
        <Banner
          id={BLOCK_IDS.MOON}
          setBannerHeight={setBannerHeight}
        />
        <AboutBlock
          id={BLOCK_IDS.ABOUT}
          model={model}
          loadModel={loadModel}
          mode={mode}
          setMode={modeSwitch}
        />
        <ProjectBlock
          id={BLOCK_IDS.PROJECTS}
        />
      </Container>
      <ConfirmDialog
        open={openConfirmDialog}
        handleClose={handleConfirmDialogClose}
      />
    </Layout>
  )
}

export default IndexPage
