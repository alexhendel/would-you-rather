import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Home from './Home';
import SignIn from './SignIn';
import NoMatch from './NoMatch';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import NavigationBar from './NavigationBar';
import Question from './Question';
import ProtectedRoute from './ProtectedRoute';
import { withStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
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
    return (
      <>
        {this.props.loading ? (
          <Backdrop open={true}>
            <CircularProgress className={classes.progress} />
          </Backdrop>
        ) : (
          <Router>
            <NavigationBar title="Would You Rather" />
            <Switch>
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/add" component={NewQuestion} />
              <ProtectedRoute
                exact
                path="/leaderboard"
                component={LeaderBoard}
              />
              <ProtectedRoute
                exact
                path="/questions/:question_id"
                component={Question}
              />
              <Route exact path="/signin" component={SignIn} />
              <ProtectedRoute>
                <NoMatch />
              </ProtectedRoute>
            </Switch>
          </Router>
        )}
      </>
    );
  }
}

export default connect((state) => ({
  loading: state.loading,
}))(withStyles(styles, { withTheme: true })(App));
