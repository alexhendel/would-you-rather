import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class ProtectedRoute extends Component {
  render() {
    const { authedUser } = this.props;
    return (
      <>
        {authedUser ? (
          <Route {...this.props}>{this.props.children}</Route>
        ) : (
          <Redirect
            to={{ pathname: '/signin', state: { from: this.props.location } }}
          />
        )}
      </>
    );
  }
}

export default connect((state) => ({
  authedUser: state.authedUser,
}))(withRouter(ProtectedRoute));
