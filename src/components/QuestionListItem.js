import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserAvatar from './UserAvatar';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { whoAsked } from '../utils/utils';

const styles = (theme) => ({
  root: {
    marginTop: '1em',
    padding: '1em',
    maxWidth: '550px',
  },
  fullWidth: {
    width: '100%',
  },
});

class QuestionListItem extends Component {
  render() {
    const { users } = this.props;
    const { classes } = this.props;
    return (
      <>
        <Paper className={classes.root} variant="outlined">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5">
                {whoAsked(users, this.props.question).name} asks...
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Grid container justify="center" alignItems="center">
                <UserAvatar user={whoAsked(users, this.props.question)} />
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h6">Would you rather...</Typography>
                  <Typography variant="body2">
                    {this.props.question.optionOne.text}...
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    className={classes.fullWidth}
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/questions/${this.props.question.id}`}
                  >
                    View Poll
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  }
}

QuestionListItem.propTypes = {
  question: PropTypes.object.isRequired,
};

export default connect((state) => ({
  users: state.users,
}))(withStyles(styles, { withTheme: true })(QuestionListItem));
