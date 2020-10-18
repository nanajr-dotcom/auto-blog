import React from 'react';
import { Link } from 'react-router-dom';
import  logo  from './Images/autologo.png';
import { useTheme, useThemeUpdate } from './ThemeContext';


function Footer() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333'
    }
    return (
        <div className="footer-container">
            <section className="footer-section">
                <div className="footer-wrapper">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    
                        
                    <div className="links">
                            <p>
                                Useful Links
                    </p>
                            <Link to='luxurycars'>Luxury Cars</Link>
                            <Link to='germancars'>German Cars</Link>
                            <Link to='americancars'>American Cars</Link>
                            <Link to='londoncars'>London Cars</Link>
                    </div>
                        
                    <div className="newsletter">
                        <p>
                            Subscribe to our news letters
                </p>
                        <form>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email..."
                            />
                            <button>
                                Subscribe
                    </button>
                        </form>
                    </div>
                </div>
                <button onClick={toggleTheme}> toggle</button>
                <div style={themeStyles}>
                    <p>nana</p>
                </div>
                    <p>© 2020. All rights reserved Auto Info. By Nana Asamoah Jnr</p>
            </section>
            
        </div>
    )
}

export default Footer;
