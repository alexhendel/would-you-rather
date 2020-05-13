import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '550px',
    marginTop: '1em',
  },
  formControl: {
    width: '100%',
    marginTop: '2em',
  },
}));

const SignIn = () => {
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const classes = useStyles();
  let loginId = authedUser ? authedUser.id : '';

  const handleSelectChange = (event) => {
    loginId = event.target.value;
  };

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            Sign In
          </Typography>
          <Typography variant="body2" component="p">
            Please Sign In.
          </Typography>
          <FormControl className={classes.formControl}>
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
                console.log(key);
                return (
                  <MenuItem key={key} value={key}>
                    {users[key].name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignIn;
