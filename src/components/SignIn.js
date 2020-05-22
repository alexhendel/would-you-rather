import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
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
});

class SignIn extends Component {
  state = {
    loginId: '',
  };
  handleSelectChange = (event) => {
    this.setState(() => ({ loginId: event.target.value }));
  };
  handleLogin = (event) => {
    event.preventDefault();
    const { history, location } = this.props;
    const { dispatch } = this.props;

    dispatch(handleSignIn(this.state.loginId));
    history.push(location.state ? location.state.from : '/');
  };
  render() {
    const { classes } = this.props;
    const { users } = this.props;
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
                value={this.state.loginId}
                onChange={this.handleSelectChange}
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
              onClick={this.handleLogin}
              disabled={!this.state.loginId}
            >
              Sign In
            </Button>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(
  withRouter(withStyles(styles, { withTheme: true })(SignIn))
);
