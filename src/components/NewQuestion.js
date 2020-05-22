import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    width: '550px',
  },
  fullWidth: {
    width: '100%',
  },
  formRoot: {
    marginTop: theme.spacing(8),
  },
});

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
  };
  handleOptionOne = (event) => {
    const optionOne = event.target.value;
    this.setState(() => ({
      optionOne,
    }));
  };
  handleOptionTwo = (event) => {
    const optionTwo = event.target.value;
    this.setState(() => ({
      optionTwo,
    }));
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, authedUser, history } = this.props;

    dispatch(
      handleAddQuestion(this.state.optionOne, this.state.optionTwo, authedUser)
    ).then(() => history.push('/'));
  };
  render() {
    const { classes } = this.props;
    const { loading } = this.props;
    return (
      <Box display="flex" alignItems="center" flexDirection="column">
        <Card variant="outlined" className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Create New Question
            </Typography>
            <Typography variant="body2" component="p">
              Complete the question:
            </Typography>
            <Typography className={classes.formRoot} variant="h6">
              <Box display="flex" alignItems="center" flexDirection="column">
                <form className={classes.fullWidth} autoComplete="off">
                  <span className={classes.fullWidth}>Would you rather...</span>
                  <TextField
                    className={classes.fullWidth}
                    required
                    id="option-one"
                    label="Required"
                    value={this.state.optionOne}
                    onChange={this.handleOptionOne}
                    placeholder="Enter option one here."
                  />
                  <div>
                    <span className={classes.fullWidth}></span>
                    <span>- OR -</span>
                    <span className={classes.fullWidth}></span>
                  </div>
                  <TextField
                    className={classes.fullWidth}
                    required
                    id="option-two"
                    label="Required"
                    value={this.state.optionTwo}
                    onChange={this.handleOptionTwo}
                    placeholder="Enter option two here."
                  />
                </form>
              </Box>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              className={classes.fullWidth}
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
              disabled={
                !this.state.optionOne || !this.state.optionTwo || loading
              }
            >
              Submit
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  }
}

function mapStateToProps({ authedUser, loading }) {
  return {
    authedUser,
    loading,
  };
}

export default connect(mapStateToProps)(
  withRouter(withStyles(styles, { withTheme: true })(NewQuestion))
);
