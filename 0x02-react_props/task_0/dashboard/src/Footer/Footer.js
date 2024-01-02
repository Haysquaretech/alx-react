import './Footer.css';

import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer () {
  const year = getFullYear();
  const footerCopyTxt = getFooterCopy(true);
  return (
    <p>Copyright {year} - {footerCopyTxt}</p>
  );
}

export default Footer;
