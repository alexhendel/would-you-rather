import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
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
  greeting: {
    marginRight: theme.spacing(1),
  },
}));

const NavigationBar = (props) => {
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

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
              <Typography className={classes.greeting}>
                Hello, {users[authedUser].name}
              </Typography>
              <UserAvatar user={users[authedUser]} />
              <Button
                color="secondary"
                onClick={() => {
                  dispatch(handleSignOut());
                  history.push('/');
                }}
              >
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
          <Button disableElevation>Home</Button>
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
};

NavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavigationBar;
