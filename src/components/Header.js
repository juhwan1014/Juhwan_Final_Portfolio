import React, { Component, useEffect, useRef } from 'react';
import { init } from 'ityped'
// import Lottie from "lottie-react";
import Lottie from "reactjs-lottie";
import steam from "./steam2.json";
import { Link, animateScroll as scroll } from "react-scroll";
// import {  } from "react";



class Header extends Component {
    state = {}
    componentDidMount(){
        const textRef = document.querySelector('#myElement')
        init(textRef, { showCursor: true, backDelay: 1500, backSpeed: 60, 
             strings: ["Software Developer", "Full-Stack Developer", "Web-Developer"] })
      }
    
    
    render() {

        return (
        
        <div className='header'>
            
            {/* <h1 className='heading-background'>hahaha</h1> */}
                            <div className="steam">
                                <Lottie
                                speed={0.4}  
                                options={{
                                    animationData: steam,
                                    loop: true
                                }} 
                                
                                />
                                {/* <Lottie animationData={steam} loop={true} setSpeed={0.2} /> */}
                            </div>
            <div className="max-width">
            {/* <h1 className='heading-background'>POSSIBLE/h1> */}
           
                <div className="header-content">
                    
                           

                            <div className="text_1">Hello, my name is</div>
                   
                    <div className="text_2">Juhwan Moon</div>
                    <div className="text_3">I'm a <span id="myElement"></span></div>
                    {/* <a href={`mailto:$juhwan0718@gmail.com`} rel="noopenner norefferer">Contact</a> */}
                    <Link 
                    activeClass="active"
                    className='contact_btn'
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Contact</Link>
                    {/* <a href="juhwan0718@gmail.com">Contact</a> */}
                </div>
            </div>

            {/* <p>asdasdadsasdakdkasmkankcnkdmaksndkkndksqndkqsndkqsndkqnskdnqskdnkqsndkqsndkqnsd
                qskdnqksdnkqsndkqsndkqnskdnqskdnlkqsndlkqndkqnskdnqskldnqksndklqnsdklsqndkqnkdn
                qskdnqlksdnkqlnsdkqnskdnqkslndkqlsndkqnsdkqnsdklqnsdklnqskdnqksndkqsndknqsdq
                sqdnqsndklq
                sndklqnsdklq
            </p> */}
        </div>);
    }
}

export default Header;