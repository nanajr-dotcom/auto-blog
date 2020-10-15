import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
function Imageslider() {
    const images = [
        { url: "images/auto1.jpeg" },
        { url: "images/auto2.jpeg" },
        { url: "images/auto3.jpeg" },
        { url: "images/auto4.jpeg" },
    ];
    return (
        <div>
            <SimpleImageSlider
                width={896}
                height={504}
                images={images}
            />   
        </div>
    )
}

export default Imageslider;
