import React from 'react'

import HeroA from '../HeroComponents/HeroA';
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'
import { useTheme, useThemeUpdate } from '../Components/ThemeContext';
import Postsonpage4 from '../Components/Postsonpage4';


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

                    <input type="checkbox" class="toggle" checked onClick={toggleTheme} />

                </div>
                <Blog />
                <Postsonpage4/>
            </div>
            <Footer />

        </div>
    )
}

export default Luxurycars;
