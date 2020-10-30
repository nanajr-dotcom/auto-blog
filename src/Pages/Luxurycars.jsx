import React from 'react'

import HeroA from '../HeroComponents/HeroA';
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'
import { useTheme, useThemeUpdate } from '../Components/ThemeContext';


function Luxurycars() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333'
    }
    return (
        <div style={themeStyles}  >
            <HeroA />
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

export default Luxurycars;
