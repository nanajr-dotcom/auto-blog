import React from 'react';
import logo from './images/autologo.png';

function Header() {
    return (
        <div className="header">
          <div>
           <img className="mainlogo" src={logo} alt="Autoinfo's Logo" /> 
          </div>
           
        </div>
    )
}

export default Header;
