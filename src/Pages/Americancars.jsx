import React from 'react'

import HeroC from '../HeroComponents/HeroC'
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'
import { useTheme, useThemeUpdate } from '../Components/ThemeContext';

function Americancars() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333'
    }
    return (
        <div style={ themeStyles}  >
            <HeroC/>
            <div  >
                <div className="first-section">
                    
                    <button onClick={toggleTheme}> toggle</button>

                </div>
                <Blog />

            </div>
            <Footer />
        </div>
    )
}

export default Americancars;
