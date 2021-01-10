import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 48,
  },
  input: {
    color: "#000",
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: theme.palette.primary.light,
  },
  menuItem: {
    color: "black",
  }
}));

const TypeBox = (props) => {
  const classes = useStyles();
  const { isLoading = true, defaultQuestions = [], addMessageToQueue = () => { } } = props
  const [inputText, setInputText] = useState("");
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuOnClick = (question) => {

    setInputText(question);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKey = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      submitText();
    }
  }

  const submitText = () => {
    addMessageToQueue(inputText);
    setInputText("");
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder={isLoading ? "Please wait until model loaded" : "Ask me some questions"}
        inputProps={{ 'aria-label': 'Question box' }}
        disabled={isLoading}
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKey}

      />
      <IconButton
        ref={anchorRef}
        className={classes.iconButton}
        onClick={handleToggle}>
        <ArrowDropDownIcon />
      </IconButton>
      <IconButton
        disabled={isLoading}
        className={classes.iconButton}
        onClick={submitText}>
        <ArrowForwardIcon />
      </IconButton>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  {defaultQuestions.map((item) =>
                    <MenuItem
                      key={item}
                      className={classes.menuItem}
                      onClick={(event) => {
                        menuOnClick(item);
                        handleClose(event);
                      }}>{item}</MenuItem>
                  )}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Paper>
  );
}

export default TypeBox