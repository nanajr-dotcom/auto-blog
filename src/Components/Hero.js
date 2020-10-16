import React from 'react'
import { hero } from './Images/auto4.jpeg';

function Hero() {
    return (
        <div className="hero-container">
            <h1>WELCOME TO AUTO INFO</h1>
            <p>Let's take a ride</p>
            <div className="hero-btn">
                <button className="btn">Sign-In</button>
            </div>
        </div>
    )
}

export default Hero;
