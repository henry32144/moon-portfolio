import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ConfirmDialog = (props) => {

  const { open = false, handleClose = () => { } } = props

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ color: "black" }} id="alert-dialog-title">{"An 107MB AI model will be downloaded"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description1">
            {`This feature makes use of the NLP deep learning technology,
             it will use a pre-trained AI model to find out the closest answers to a question from a passage.
              I use this AI to help answer some simple questions about me.`
            }
          </DialogContentText>
          <DialogContentText id="alert-dialog-description2">
            {`The AI model is hosted on the cloud,
             therefore we need to download it and load it.
              If you want to preserve your network data, please click cancel to close this window.`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleClose(true)} color="secondary" variant="outlined">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ConfirmDialog