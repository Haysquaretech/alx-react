import './Footer.css';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer () {
  const year = getFullYear();
  const footerCopyTxt = getFooterCopy(true);
  return (
    <>
      {this.props.user.isLoggedIn && <p><a href='#'>Contact us</a></p>}
      <p>Copyright {year} - {footerCopyTxt}</p>
    </>
  );
}

export function mapStateToProps (state) {
  const ui = state.uiReducer.toJS();
  return {
    user: ui.user
  };
}

// Assign Proptypes
Footer.propTypes = {
  user: PropTypes.object
};

// Set Default PropTypes
Footer.defaultProps = {
  user: {}
};

export default connect(mapStateToProps)(Footer);
