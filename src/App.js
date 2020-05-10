import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* <Home /> */}
        </Route>
        <Route exact path="/signin">
          {/* <SignIn /> */}
        </Route>
        <Route exact path="/add">
          {/* <AddPoll /> */}
        </Route>
        <Route exact path="/leaderboard">
          {/* <LeaderBoard /> */}
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
