import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./views/home/Home";
import Gallery from "./views/gallery/Gallery"
import React, { useState } from 'react';
import menu from './Images/menu.pdf'
import Error from './views/Error/Error'
import About_Us from './views/AboutUs/AboutUs';
import skip from './Images/SkiptheDishes.png'
import uber from './Images/UberLogo.png'
import MenuBar from './Components/MenuBar'
import burger from './Images/hamburger-menu.svg'


//test2
function App() {
    
    const [open,setOpen] = useState(false)

  return (
    <div className="App">
        {/* routes to different pages based on url */}
        <div className="Title">                                            
            <div className="container"> 
                <a className="logo" href= "/"> Asia Garden</a>      {/* Top Left Logo*/}
                <img src={burger} alt="" class="burger" onClick={() => setOpen(!open)}/>     {/* Hamburger Menu icon for mobile. Onclick to show menubar and close menubar*/}
                    <nav class="nav">

                    <ul className="primary-nav">                         {/* navigation menu */}     
                        <li className="current"><a href="/">Home</a> </li>         {/* Hopme button*/}                
                        <li><a href={menu} target="_blank">Menu</a> </li>        {/* Menu Link*/}
                        <li><a href="Gallery">Gallery</a> </li>                   {/* Gallery Link*/}     
                        <li ><a href="AboutUs">About Us</a> </li>                  {/*About Us link*/}
                    </ul>

                    <ul className="secondary-nav">
                        <li><a href="/#contact">Contact Us</a></li>              {/* Contact section*/} 
                                    
                    </ul>
                    </nav>
            </div>
        </div>
        <MenuBar trigger = {open} setTrigger = {setOpen}/>      {/* Popup for mobile menu  */}

        <BrowserRouter>         {/* paths to other pages*/}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Gallery" element={<Gallery />} />
                <Route path="AboutUs" element={<About_Us />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>

        {/*TEMPORARY*/}
        {/*<button onClick={() => callLogout()}>logout (temporary - need additional refresh) isAdmin: {isAdmin}</button>*/}
        {/*<button >isUserLoggedIn {isUserLoggedIn.toString()} </button>*/}


        <div className="order">     {/*bottom of pages */}
            <h2>Order Here:</h2>
        </div>

        <section className="end">                                                 
            <div className="bot">
                <div className="icons">
                    <a className="uber" href="https://www.ubereats.com/ca/store/asia-garden-rexdale/DRzKBEfSSzixcvMdSp3VeQ" target="_blank"><img className="uber" src={uber} alt=""/></a>
                    <a className="skip" href="https://www.skipthedishes.com/asia-garden-restaurant" target="_blank"><img className="skip" src={skip} alt=""/></a>
                </div>
                <div  className="hours" > 
                    <h1>Tuesday to Thursday: 12pm to 10:30pm <br/> Friday and Saturday:  12pm to 11:30pm <br/> Sunday:  12pm to 11pm<br/> Monday: Closed</h1>         
                </div>
                <div className="location">
                    <h1 >2648 Islington Ave. Toronto Ontario<br/>M9V 2X5 <br/>Phone: 416 749 8333</h1>
                </div>
                
            </div>
        </section>
    </div>



  );
}



export default App;


