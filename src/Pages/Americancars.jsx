import React from 'react'

import HeroC from '../HeroComponents/HeroC'
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'
import { useTheme, useThemeUpdate } from '../Components/ThemeContext';
import Postsonpage3 from '../Components/Postsonpage3';

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
                    
                    <input type="checkbox" class="toggle" checked onClick={toggleTheme} />

                </div>
                <Blog />
                <Postsonpage3/>

            </div>
            <Footer />
        </div>
    )
}

export default Americancars;
