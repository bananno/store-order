import React from 'react';
import classes from './AppLogo.css';
import sportsLogo from '../../../assets/images/logo.png'

const appLogo = (props) => {
  return (
    <div className={classes.AppLogo}>
      <img src={sportsLogo} alt="Sports Logo"/>
    </div>
  );
};

export default appLogo;
