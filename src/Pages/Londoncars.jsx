import React from 'react'
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'
import HeroD from '../HeroComponents/HeroD'
import { useTheme, useThemeUpdate } from '../Components/ThemeContext';
import Postsonpage2 from '../Components/Postsonpage2';

function Londoncars() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333'
    }

    return (
        <div style={themeStyles}  >
            <HeroD/>
            <div  >
                <div className="first-section">

                    <input type="checkbox" class="toggle" checked onClick={toggleTheme} />

                </div>
                <Blog />
                <Postsonpage2/>
            </div>
            <Footer />
            
        </div>
    )
}

export default Londoncars;
