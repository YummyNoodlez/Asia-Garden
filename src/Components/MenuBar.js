import React, { useState } from 'react'
import menu from '../Images/menu.pdf'

const MenuBar = ({trigger, setTrigger}) => {

    //Menu bar for mobile layout

  return (trigger) ? (
    <div>
        
        <div>
        <div>
        
        <nav class="mobile-nav">

            <ul className="primary-nav-mobile">                        {/** mobiel navigation popout*/}
                <li className="current"><a href="/">Home</a> </li>                        
                <li><a href={menu} target="_blank">Menu</a> </li>
                <li><a href="/Gallery">Gallery</a> </li>                                       
                <li ><a href="/AboutUs">About Us</a> </li>                              
            

                <li><a href="/#contact">Contact Us</a></li>  
                
            </ul>
        </nav>
        </div>
        </div>
    </div>
  ): null
}

export default MenuBar