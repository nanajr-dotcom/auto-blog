import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from '../HeroComponents/Hero';
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'
import { useTheme, useThemeUpdate } from '../Components/ThemeContext';
import Postsonpage from '../Components/Postsonpage';





function Home() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333'
    }

    return (
        <div style={themeStyles}  >
         <Hero />
            <div  >
                <div className="first-section">

                    <input type="checkbox" class="toggle" checked onClick={toggleTheme}/>

                </div>
                <Blog />
                <Postsonpage/>

            </div>
            <Footer />
        </div>   
    )
}

export default Home;
