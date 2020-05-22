import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleSignOut } from '../actions/authedUser';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import UserAvatar from './UserAvatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  spacer: {
    flexGrow: 1,
  },
  title: {
    padding: theme.spacing(1),
  },
  greeting: {
    marginRight: theme.spacing(1),
  },
});

class NavigationBar extends Component {
  signOut = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(handleSignOut());
  };
  render() {
    const { classes } = this.props;
    const { authedUser } = this.props;
    const { users } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" elevation={0} color="transparent">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              {this.props.title}
            </Typography>
            <span className={classes.spacer} />
            {authedUser ? (
              <>
                <Typography className={classes.greeting}>
                  Hello, {users[authedUser].name}
                </Typography>
                <UserAvatar user={users[authedUser]} />
                <Button color="secondary" onClick={this.signOut}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/signin"
              >
                Sign In
              </Button>
            )}
          </Toolbar>
          <Divider />
          <Toolbar>
            <span className={classes.spacer} />
            <Button disableElevation component={Link} to="/">
              Home
            </Button>
            <Button disableElevation component={Link} to="/add">
              New Question
            </Button>
            <Button disableElevation component={Link} to="/leaderboard">
              Leader Board
            </Button>
            <span className={classes.spacer} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
};

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser,
  };
}

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(NavigationBar)
);
