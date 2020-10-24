import React from 'react'

import HeroB from '../HeroComponents/HeroB';

import "bootstrap/dist/css/bootstrap.min.css";
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'
import { useTheme, useThemeUpdate } from '../Components/ThemeContext';






function Germancars() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333'
    }
    return (
      
        <div style={ themeStyles }  >
            <HeroB />
            <div  >
                
                <button onClick={toggleTheme}> toggle</button>
           <Blog/>
           
            </div>
           <Footer/>
        </div>
       
    )
}

export default Germancars;
