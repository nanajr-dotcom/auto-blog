import React from 'react'
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'
import HeroD from '../HeroComponents/HeroD'
import { useTheme, useThemeUpdate } from '../Components/ThemeContext';

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

                    <button onClick={toggleTheme}> toggle</button>

                </div>
                <Blog />

            </div>
            <Footer />
            
        </div>
    )
}

export default Londoncars;
