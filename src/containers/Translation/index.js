import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { getTranslationList } from "./store/actions";
import { Redirect } from "react-router-dom";
import styles from './style.css'
import withStyle from '../../withStyle'

class Translation extends Component {
  getList() {
    const { list } = this.props;
    return list.map(item => <div classNmae={styles.item} key={item.id}>{item.title}</div>);
  }

  render() {
    return this.props.login ?
      <Fragment>
        <Helmet>
          <title>This is the latest tanslations list.</title>
          <meta name="description" content="This is the latest tanslations list." />
        </Helmet>
        <div className={styles.container}>{this.getList()}</div>
      </Fragment>
      : <Redirect to="/" />;
  }

  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getTranslationList();
    }
  }
}

const mapStateToProps = state => ({
  list: state.translation.translationList,
  login: state.header.login
});

const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    dispatch(getTranslationList());
  }
});

const ExportTranslation = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyle(Translation, styles));

ExportTranslation.loadData = store => {
  return store.dispatch(getTranslationList());
};

export default ExportTranslation
