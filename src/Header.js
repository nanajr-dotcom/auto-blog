import React from 'react';
import logo from './Images/autologo.png';

function Header() {
    return (
        <div className="header">
          <div>
           <img className="mainlogo" src={logo} alt="Autoinfo's Logo" /> 
          </div>
           
           <div>
          <button> HOME</button>
           <br></br>
           <button>LUXURY</button>
           <br></br>
           <button>GERMAN</button>
           <br></br>
           <button>LONDON</button>
        </div>
        </div>
    )
}

export default Header;
