import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (props) => {
  return (
    <div>
      <Link to='/'>Front Page</Link>
      <br />
      {props.login ?
        <Fragment>
          <Link to='/logout'>Transliation List</Link>
          <br />
          <Link to='/logout'>Logout</Link>
        </Fragment> : <Link to='/login'>Login</Link>}
    </div>
  )
}

const mapState = (state) => ({
  login: state.header.login
})

export default connect(mapState, null)(Header)