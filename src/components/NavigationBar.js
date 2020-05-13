import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import UserAvatar from './UserAvatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { handleSignOut } from '../actions/authedUser';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  spacer: {
    flexGrow: 1,
  },
  title: {
    padding: theme.spacing(1),
  },
  avatarSmall: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginLeft: theme.spacing(1),
    boxShadow: theme.shadows[2],
  },
}));

const NavigationBar = (props) => {
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const classes = useStyles();

  const logout = () => handleSignOut();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <span className={classes.spacer} />

          {authedUser ? (
            <>
              <Typography>Hello, {users[authedUser.id].name}</Typography>
              <UserAvatar user={users[authedUser.id]} />
              <Button onClick={logout()}>Sign Out</Button>
            </>
          ) : (
            <Button component={Link} to="/signin">
              Sign In
            </Button>
          )}
        </Toolbar>
        <Divider />
        <Toolbar>
          <span className={classes.spacer} />
          <Button disableElevation>Home</Button>
          <Button disableElevation>New Question</Button>
          <Button disableElevation component={Link} to="/leaderboard">
            Leader Board
          </Button>
          <span className={classes.spacer} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavigationBar;
