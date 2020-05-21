import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleSaveQuestionAnswer } from '../actions/questions';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  fullWidth: {
    width: '100%',
  },
});

class QuestionVote extends Component {
  state = {
    choice: 'optionOne',
  };
  handleChange = (event) => {
    const choice = event.target.value;
    this.setState(() => ({ choice }));
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, authedUser, history } = this.props;

    dispatch(
      handleSaveQuestionAnswer(
        authedUser,
        this.props.question.id,
        this.state.choice
      )
    ).then(() => {
      history.push('/');
      history.push(`/questions/${this.props.question.id}`);
    });
  };
  render() {
    const { classes } = this.props;
    const { loading } = this.props;
    return (
      <Paper className={classes.root} variant="outlined">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h6">Would you rather...</Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <RadioGroup
                name="options"
                value={this.state.choice}
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value="optionOne"
                  control={<Radio />}
                  label={this.props.question.optionOne.text}
                />
                <FormControlLabel
                  value="optionTwo"
                  control={<Radio />}
                  label={this.props.question.optionTwo.text}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="primary"
              className={classes.fullWidth}
              variant="contained"
              disabled={loading}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

QuestionVote.propTypes = {
  question: PropTypes.object.isRequired,
};

function mapStateToProps({ authedUser, loading }) {
  return {
    authedUser,
    loading,
  };
}

export default connect(mapStateToProps)(
  withRouter(withStyles(styles, { withTheme: true })(QuestionVote))
);
