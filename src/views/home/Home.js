import './Home.css';
import React, { useState } from 'react';
import c1 from '../../Images/C1.jpg'
import c2 from '../../Images/C2.jpg'
import c3 from '../../Images/C3.jpg'
import menu from '../../Images/menu.pdf'
import ImagePopUp from '../../Components/ImagePopUp';
import Email from '../../Components/Contact'


function Home() {
    
        const [click, setClick] = useState(false);  
        const [i_img, setI_img] = useState(null);   

        const setPopUp = (image) => {           //sets image clicked and image path for ImagePopUp
            setI_img(image);
            setClick(true);
          };
    
        
  return (
   
    <div>
        
        <section className="hero"> 
                                        
            <div className="container">
                
                <div className="leftcol">
                    <p className="subhead">Asia Garden</p>           {/* Asia garden text*/}
                    <p className="info">Cantonese, Szechuan and Hakka Chinese Food in Toronto<br/>Take Out and Catering<br/>All Halal Meats</p>
                </div>
            </div>
        </section>

        <section className="food">                    {/*Food text and 3 images */}               
            <div className="mid">
                <h2 className="head">Food</h2>
                <h2 className="slogan">For Catering orders <br/>Please Contact 3-4 Days Ahead</h2>
        
            </div>
            <div className="mid">
                <img src={c1} alt="Left image" onClick = {() => setPopUp(c1)}/>          { /**onClick popUp */   }        
                <img src={c2} alt="Middle image" onClick = {() => setPopUp(c2)}/>                    
                <img src={c3} alt="Right image" onClick = {() => setPopUp(c3)}/>        
                      
            
            </div>
            
        </section>
        <section className="special">                   {/*lunch special section */}                                       
            <div class="lunch">                                   
                <h1>Lunch Special</h1>
                <div className="container">
                    <div className="l_special">
                        <img className="i_lunch" src={c1} alt="Lunch special image"  onClick = {() => setPopUp(c1)}/>
                        <img className="i_lunch" src={c2} alt="Lunch special image"  onClick = {() => setPopUp(c2)}/>
                    </div>
                    <div className="r_special">
                        <h2>Only from 12pm to 3:30pm</h2>
                        <a className="click" href={menu} target="blank">Click Here</a>        {/* lunch special menu link*/}            
                    </div>
                </div>
            </div>
        </section>
        
        
        <section className="contact-section" id="contact">      {/*contact section and google maps */}                               
            <div className="container" id="end-contain">
                <div className="contact-left">
                    <h2>Contact</h2>
                    <Email/>                {/*Emailjs function to send emails to asiagarden1998@gmail.com */}
                </div>
                <div className="contact-right">           
                    <iframe title="google"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.88221769292!2d-79.56624499200366!3d43.73809220343018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3a83f9de8a07%3A0xdd0eed1eb087ae32!2sAsia%20Garden!5e0!3m2!1sen!2sca!4v1647301415214!5m2!1sen!2sca" allowFullScreen="" loading="lazy"></iframe>                
                </div>
            </div>
        </section>

        <ImagePopUp trigger = {click} setTrigger = {setClick}  image = {i_img}/>     {/*ImagePopUp function to pop up all food images */}
        
        
</div>
  );
}

export default Home;
