import React from 'react';
import { useSelector } from 'react-redux';
import TabPanel from './TabPanel';
import QuestionListItem from './QuestionListItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const QuestionList = () => {
  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((state) => state.questions);
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const questionsArray = (questionsObject) => {
    let arr = [];
    Object.keys(questionsObject).forEach(function (key) {
      arr.push(questions[key]);
    });
    return arr;
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Tabs
            centered
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleTabChange}
          >
            <Tab label="Unanswered Qestions" />
            <Tab label="Answered Questions" />
          </Tabs>
          <TabPanel value={tab} index={0}>
            {questionsArray(questions)
              .filter(
                (question) =>
                  !question.optionOne.votes.includes(authedUser) &&
                  !question.optionTwo.votes.includes(authedUser)
              )
              .sort((a, b) =>
                a.timestamp > b.timestamp
                  ? -1
                  : b.timestamp > a.timestamp
                  ? 1
                  : 0
              )
              .map((filteredQuestion) => (
                <QuestionListItem
                  key={filteredQuestion.id}
                  question={filteredQuestion}
                />
              ))}
          </TabPanel>
          <TabPanel value={tab} index={1}>
            {questionsArray(questions)
              .filter(
                (question) =>
                  question.optionOne.votes.includes(authedUser) ||
                  question.optionTwo.votes.includes(authedUser)
              )
              .sort((a, b) =>
                a.timestamp > b.timestamp
                  ? -1
                  : b.timestamp > a.timestamp
                  ? 1
                  : 0
              )
              .map((filteredQuestion) => (
                <QuestionListItem
                  key={filteredQuestion.id}
                  question={filteredQuestion}
                />
              ))}
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuestionList;
