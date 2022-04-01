import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa'
import ImagePopUp from './ImagePopUp'

const ImageSlider = ({slides}) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {               //changes all 3 images
        setCurrent(current === length - 3 ? 0 : current + 3)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 3 : current - 3)
    }

    //Image popup triggers
    const [click, setClick] = useState(false);      
    const [i_img, setI_img] = useState(null);

    const setPopUp = (image) => {
        setClick(true);
        setI_img(image);
      };


    

    if(!Array.isArray(slides) || slides.length <=0 ){   //no slider if no sliderData
        return null;
    }
    console.log(current)
    
    return (

    <section class="slider">

        <FaArrowCircleRight class="right-arrow" onClick={nextSlide}/>   
        <FaArrowCircleLeft class="left-arrow" onClick={prevSlide}/>

        {SliderData.map((slide, index) => {

            return(
                <div>
                <div className={index === current ? 'slide active' : 'slide'} key={index} >     {/**index for image */}
                    {index === current &&(
                    <img class="image"src={slide.image} alt="First Slider image" onClick = {() => setPopUp(slide.image)}/>     /**first image */
                    )}
                    </div>
                <div>
                {index === current + 1 &&(
                    <img class="image"src={slide.image} alt="Middle Slider image" onClick = {() => setPopUp(slide.image)}/>     /*second index for image */
                    )}
                </div>
                <div>
                {index === current + 2 &&(
                    <img class="image"src={slide.image} alt="Right Sider image" onClick = {() => setPopUp(slide.image)}/>     /**third index for image */
                    )}
                </div>
                
                </div>
            )
        })
    }
          
          <ImagePopUp trigger = {click} setTrigger = {setClick}  image = {i_img}/>  {/*PopUp fucntion for images in the slider */}
    </section>
  )
}

export default ImageSlider