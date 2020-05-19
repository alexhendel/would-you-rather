import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
}));

const UserAvatar = (props) => {
  const classes = useStyles();
  return (
    <>
      {props.user.avatarURL ? (
        <Avatar src={`${process.env.PUBLIC_URL}/${props.user.avatarURL}`} />
      ) : (
        <Avatar className={classes.avatar}>{props.user.name.charAt(0)}</Avatar>
      )}
    </>
  );
};

UserAvatar.protoTypes = {
  user: PropTypes.object.isRequired,
};

export default UserAvatar;
