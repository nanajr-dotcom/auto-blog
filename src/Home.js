import React from 'react';
import Header from './Header.js';
import Footer from './Footer';
import Imageslider from './Imageslider.js';

function Home() {
    return (
        <div className="mainhome">
        <main>
        <Header/>
        <Imageslider/>
        <Footer/>
        </main>   
        </div>
    )
}

export default Home;
