import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
  },
  more: {
    color: theme.palette.primary.contrastText,
  },
}));

const NavigationBar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <span className={classes.spacer} />
          <Button variant="contained" color="primary" disableElevation>
            Home
          </Button>
          <Button variant="contained" color="primary" disableElevation>
            New Question
          </Button>
          <Button variant="contained" color="primary" disableElevation>
            Leader Board
          </Button>
          <span className={classes.spacer} />

          <Typography>Hello, user!</Typography>
          <Avatar className={classes.avatarSmall}>HB</Avatar>
          <IconButton
            aria-label="more"
            className={classes.more}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>

          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Sign out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NavigationBar;
