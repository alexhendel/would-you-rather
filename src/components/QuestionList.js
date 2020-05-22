import React, { Component } from 'react';
import { connect } from 'react-redux';
import TabPanel from './TabPanel';
import QuestionListItem from './QuestionListItem';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
});

class QuestionList extends Component {
  state = {
    tab: 0,
  };
  handleTabChange = (event, value) => {
    this.setState(() => ({
      tab: value,
    }));
  };
  questionList = () => {
    const { questions } = this.props;
    let list = [];
    Object.keys(questions).forEach(function (key) {
      list.push(questions[key]);
    });
    return list;
  };
  render() {
    const { classes } = this.props;
    const { authedUser } = this.props;
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
              value={this.state.tab}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.handleTabChange}
            >
              <Tab label="Unanswered Qestions" />
              <Tab label="Answered Questions" />
            </Tabs>
            <TabPanel value={this.state.tab} index={0}>
              {this.questionList()
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
            <TabPanel value={this.state.tab} index={1}>
              {this.questionList()
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
  }
}

export default connect((state) => ({
  authedUser: state.authedUser,
  questions: state.questions,
}))(withStyles(styles, { withTheme: true })(QuestionList));
