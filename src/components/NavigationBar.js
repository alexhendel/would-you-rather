import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <span className={classes.spacer} />

          <Typography>Hello, user!</Typography>
          <Avatar className={classes.avatarSmall} elevation={4}>
            HB
          </Avatar>
          <Button>Sign out</Button>
        </Toolbar>
        <Divider />
        <Toolbar>
          <span className={classes.spacer} />
          <Button disableElevation>Home</Button>
          <Button disableElevation>New Question</Button>
          <Button disableElevation>Leader Board</Button>
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
