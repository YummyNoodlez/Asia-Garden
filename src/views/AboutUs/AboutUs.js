import React from "react";
import './AboutUs.css'

function About_Us() {
//about us page 
    return (
        <div>
            <div class="about">
                <h2 class="about">Our Story</h2>            {/**header */}
            </div>
            <section class="us">
                <p class="asia">        {/**about text */}
                  
                    Welcome to Asia Garden. Established here since 1998<br/>
                    We serve a variety of dishes and have all Halal meats<br/>
                    Our goal is to serve great food to everyone<br/><br/>
                </p>
            </section>
        </div>
    );
}

export default About_Us;