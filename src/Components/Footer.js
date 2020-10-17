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
                <div className="footer-logo">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div>
                        <h2>
                            Useful Links
                    </h2>
                        <Link to='luxurycars'>Luxury Cars</Link>
                        <Link to='germancars'>German Cars</Link>
                        <Link to='americancars'>American Cars</Link>
                        <Link to='londoncars'>London Cars</Link>
                    </div>
                    
                </div>
                
                
            </section>
            
        </div>
    )
}

export default Footer;
