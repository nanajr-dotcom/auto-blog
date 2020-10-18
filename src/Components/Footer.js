import React from 'react';
import { Link } from 'react-router-dom';
import  logo  from './Images/autologo.png';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-section">
                
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
                <div className="footer-wrapper">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className="footer-wrapper">
                    
                    <div>
                        <h2>
                            Useful Links
                    </h2>
                        <Link to='luxurycars'>Luxury Cars</Link>
                        <Link to='germancars'>German Cars</Link>
                        <Link to='americancars'>American Cars</Link>
                        <Link to='londoncars'>London Cars</Link>
                    </div>
                    <p>© 2020. All rights reserved Auto Info. By Nana Asamoah Jnr</p>
                </div>
                
                
            </section>
            
        </div>
    )
}

export default Footer;
