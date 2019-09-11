import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "./store/";

class Header extends Component {
  render() {
    const { login, handleLogin, handleLogout } = this.props;
    return (
      <div>
        <Link to="/">Front Page</Link>
        <br />
        {login ? (
          <Fragment>
            <Link to="/translation">Translation List</Link>
            <br />
            <div onClick={handleLogout}>Logout</div>
          </Fragment>
        ) : (
          <div onClick={handleLogin}>Login</div>
        )}
      </div>
    );
  }
}

const mapState = state => ({
  login: state.header.login
});

const mapDispatch = dispatch => ({
  handleLogin() {
    dispatch(actions.login());
  },
  handleLogout() {
    dispatch(actions.logout())
  }
});
export default connect(
  mapState,
  mapDispatch
)(Header);
