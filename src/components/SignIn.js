import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { handleSignIn } from '../actions/authedUser';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '450px',
    marginTop: '1em',
  },
  formElement: {
    width: '100%',
    marginTop: '2em',
  },
  cardContent: {
    textAlign: 'center',
  },
}));

const SignIn = (props) => {
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [loginId, setLoginId] = React.useState(authedUser ? authedUser.id : '');

  const handleSelectChange = (event) => {
    setLoginId(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(handleSignIn(loginId));
    history.push('/');
  };

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" component="h2">
            Sign In
          </Typography>
          <Typography variant="body2" component="p">
            Please Sign In.
          </Typography>
          <img alt="react logo" src="logo192.png" />
          <FormControl className={classes.formElement}>
            <InputLabel id="select-user-label">User</InputLabel>
            <Select
              labelId="select-user-label"
              id="user-select"
              value={loginId}
              onChange={handleSelectChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {Object.keys(users).map((key) => {
                return (
                  <MenuItem key={key} value={key}>
                    {users[key].name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Button
            className={classes.formElement}
            color="primary"
            variant="contained"
            onClick={handleLogin}
            disabled={!loginId}
          >
            Sign In
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignIn;
