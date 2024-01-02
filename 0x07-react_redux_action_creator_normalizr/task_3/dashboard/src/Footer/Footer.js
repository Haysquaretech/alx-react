import './Footer.css';
import React, { useContext } from 'react';
import { AppContext } from '../App/AppContext';

import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer () {
  const { user } = useContext(AppContext);
  const year = getFullYear();
  const footerCopyTxt = getFooterCopy(true);
  return (
    <>
      {user.isLoggedIn && <p><a href="#">Contact us</a></p>}
      <p>Copyright {year} - {footerCopyTxt}</p>
    </>
  );
}

export default Footer;
