import React, {useRef} from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );


  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to='#'
            onClick={(e) => {
                window.location.href = "mailto:info@terrable.dev";
                e.preventDefault();
            }}>Contact</Link>
        </li>
        <li>
          {/* I know this scrolls to the wrong section rn but idk what to scroll to cause you dont have to scroll to see that section  */}
          <Link to="#" onClick={window.scrollTo({top: 0, behavior: 'smooth'})}>About us</Link>
        </li>
        {/* <li>
          <Link to="#0">FAQs</Link>
        </li>
        <li>
          <Link to="#0">Support</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default FooterNav;