import React, { Component } from 'react';
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
          <Redirect to="/signin" />
        )}
      </>
    );
  }
}

export default connect((state) => ({
  authedUser: state.authedUser,
}))(ProtectedRoute);
