import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = (theme) => ({
  fullWidth: {
    width: '100%',
  },
  card: {
    padding: '1em',
  },
  badge: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    width: '80px',
    height: '25px',
    borderRadius: '5px',
    textAlign: 'center',
    marginBottom: '0.3em',
  },
});

class QuestionResult extends Component {
  render() {
    const { classes } = this.props;
    const { users } = this.props;
    const { question } = this.props;
    return (
      <Paper className={classes.card} variant="outlined">
        <Grid container spacing={1} alignItems="center" alignContent="center">
          <Grid item xs={12}>
            {this.props.myVote ? (
              <>
                <div className={classes.badge}>
                  <Typography variant="caption">Your Vote</Typography>
                </div>
                <Typography>
                  {question[this.props.optionKey]
                    ? 'Would you rather '.concat(
                        question[this.props.optionKey].text
                      )
                    : ''}
                </Typography>
              </>
            ) : (
              <Typography>
                {question[this.props.optionKey]
                  ? 'Would you rather '.concat(
                      question[this.props.optionKey].text
                    )
                  : ''}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <LinearProgress
              className={classes.fullWidth}
              variant="determinate"
              value={
                (question[this.props.optionKey].votes.length * 100) /
                Object.keys(users).length
              }
            />
          </Grid>
          <Grid item xs={12}>
            {`${question[this.props.optionKey].votes.length} out of ${
              Object.keys(users).length
            }`}
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

QuestionResult.propTypes = {
  question: PropTypes.object.isRequired,
  optionKey: PropTypes.string.isRequired,
  myVote: PropTypes.bool,
};

export default connect((state) => ({
  users: state.users,
}))(withStyles(styles, { withTheme: true })(QuestionResult));
