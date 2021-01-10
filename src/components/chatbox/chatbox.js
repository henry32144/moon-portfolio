import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import _ from 'lodash'
import { useSnackbar } from 'notistack';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Grow from '@material-ui/core/Grow';

import TypeBox from "./type-box.js"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    width: "100%",
    height: "512px",
    display: "flex",
    flexDirection: "column",
    background: "rgb(255 255 255 / 0.2)"
  },
  contentBoxContainer: {
    flex: "1 1 auto",
    position: "relative",
    height: "80%",
  },
  listContainer: {
    height: "100%",
    overflowY: "auto",
  },
  userListItem: {
    justifyContent: "flex-end",
  },
  textItem: {
    color: "rgba(0, 0, 0, 0.87)",
    border: "none",
    outline: 0,
    fontSize: "0.8125rem",
    borderRadius: 16,
    backgroundColor: "#e0e0e0",
    padding: 16,
    maxWidth: "75%",
    flex: "0 1 auto",
  },
  userTextItem: {
    backgroundColor: theme.palette.secondary.main,
  },
  typeBoxContainer: {
    flex: "0 1 auto",
    padding: theme.spacing(1),
  },
  loadingIndicator: {
    top: theme.spacing(2),
    width: "100%",
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    position: "absolute",
  },
}));

const ChatBox = (props) => {
  const classes = useStyles();
  const passage = `Hi, I am a Question Answering Fairy hired by Cheng Han. 
  I can do answer some simple questions about Cheng Han.
  Cheng Han is a software engineer.
  His motivation is to build interesting products which rich people's life.
  He was born on 1997/08/03 in Taiwan.
  He is ${_.parseInt(new Date().getFullYear()) - 1997} years old.
  Currently, He has one year of work experience as a software engineer.
  He graduated from Tunghai University which located in Taiwan in 2019/06.
  He was major in Computer Science.
  His current job is building websites using React.js, WebAR, and Node.js at Memopresso Inc.
  The programming languages he uses are Python, JavaScript, Java, C#, Swift, SQL.
  The machine learning frameworks he uses are Tensorflow, Keras, PyTorch, Scikit-Learn, XGBoost.
  He can speak English, Mandarin, and Japanese.
  He can make websites.
  He has skills in Frontend engineering, Backend engineering, Machine Learning application, and App development.
  `
  const defaultQuestions = [
    "Who is Cheng Han",
    "What is his motivation",
    "How many years of work experinece does he have",
    "Where did he graduate",
    "When did he graduate",
    "What is his major",
    "What skills does he have",
    "What programming languages does he use",
    "What machine learning frameworks does he use",
  ]

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [messageQueue, setMessageQueue] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { model = null, loadModel = () => { } } = props;

  useEffect(() => {
    try {
      if (!model) {
        const waitLoadModel = async () => {
          setLoading(true);
          await loadModel();
          setLoading(false);
          setMessageQueue([{
            isUser: false,
            text: "Hi, I am a Question Answering Fairy hired by Cheng Han. I can answer some basic questions about him for you. I was built by Tensorflow JS."
          }])
        }
        waitLoadModel();
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Oops! Error happened", {
        variant: 'error',
      });
    }
  }, [model])

  useEffect(() => {
    try {
      if (messageQueue.length > 0) {
        const anchor = document.querySelector('#ask-text-container');
        if (!_.isEmpty(anchor)) {
          anchor.scrollTop = anchor.scrollHeight - anchor.clientHeight;
        }
      }
    } catch (error) {
      enqueueSnackbar("Oops! Error happened", {
        variant: 'error',
      });
    }
  }, [messageQueue])

  const addMessageToQueue = async (message) => {
    try {
      if (!_.isEmpty(message)) {
        const newMessageQueue = [...messageQueue]
        newMessageQueue.push({
          isUser: true,
          text: message,
        })
        setMessageQueue(newMessageQueue)

        const answers = await model.findAnswers(message, passage);
        console.log(answers);
        let answerItem;
        if (answers.length > 0) {
          answerItem = {
            isUser: false,
            text: answers[0].text,
          }
        } else {
          answerItem = {
            isUser: false,
            text: "Sorry, I don't understand. Please forgive me.",
          }
        }
        const newMessageQueue2 = [...newMessageQueue]
        newMessageQueue2.push(answerItem)
        setMessageQueue(newMessageQueue2)
      }
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Oops! Error happened", {
        variant: 'error',
      });
    }
  }

  return (
    <Paper className={classes.paper} elevation={3}>
      <Box className={classes.contentBoxContainer}>
        {isLoading && <Box className={classes.loadingIndicator} >
          <Chip label="Loading model..."></Chip>
        </Box>}
        <List className={classes.listContainer} id="ask-text-container">
          {messageQueue.map((item, index) =>
            <Grow in={true} key={"input" + item.text + index}>
              <ListItem
                className={clsx({
                  [classes.userListItem]: item.isUser,
                })}

              >
                <ListItemText
                  className={clsx(
                    classes.textItem,
                    {
                      [classes.userTextItem]: item.isUser,
                    })}

                  primary={item.text}
                />
              </ListItem>
            </Grow>
          )}

        </List>
      </Box>
      <Box className={classes.typeBoxContainer}>
        <TypeBox addMessageToQueue={addMessageToQueue} isLoading={isLoading} defaultQuestions={defaultQuestions}>
        </TypeBox>
      </Box>
    </Paper>
  );
}

export default ChatBox