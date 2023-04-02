import React from 'react';
import { Link } from 'react-scroll';
import { logo } from '../assets';
import styles from '../style';

const Header = () => {
  return (
    <header className="py-8">
      <div className={`${styles.padding} ${styles.flexStart}`}>
        <div className="w-full flex justify-between">
          <a href="#">
            <img src={logo} alt=" " />
          </a>
          <div className="flex justify-end">
        
            <a href="https://vacacapital.com/login">
              <button className="btn btn-sm btn-equal">Log In</button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

