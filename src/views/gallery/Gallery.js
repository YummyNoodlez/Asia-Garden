import React from 'react';
import ImageSlider from "../../Components/ImageSlider";
import './Gallery.css'
import { SliderData } from '../../Components/SliderData'



function Gallery() {
   

    return (
        <div>
            <div class="gallery">           {/*gallery heading */}
                <h1>Gallery</h1>
            </div>
            <div >
                <ImageSlider slides={SliderData}/>      {/*ImageSlider to show layout and SliderData for pictures in slider */}
            </div>
              

        </div>
        
    );
}

export default Gallery;