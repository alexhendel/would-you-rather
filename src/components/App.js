import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './NoMatch';
import SignIn from './SignIn';
import NavigationBar from './NavigationBar';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Backdrop from '@material-ui/core/Backdrop';
import LeaderBoard from './LeaderBoard';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme) => ({
  progress: {
    color: theme.palette.getContrastText('#000'),
  },
});

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { classes } = this.props;
    if (this.props.loading === true) {
      return (
        <>
          <Backdrop open={true}>
            <CircularProgress className={classes.progress} />
          </Backdrop>
        </>
      );
    }

    return (
      <Router>
        <NavigationBar title="Would You Rather" />
        <Switch>
          <Route exact path="/">
            {/* <Home /> */}
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/add">
            {/* <AddPoll /> */}
          </Route>
          <Route exact path="/leaderboard">
            <LeaderBoard />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default connect((state) => ({
  loading: state.loading,
}))(withStyles(styles, { withTheme: true })(App));
