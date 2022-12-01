import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import me from '../images/me.jpeg'
import Lottie from "reactjs-lottie";
import coffee from "./coffee.json";



class About extends Component {
    state = {  }
    render() { 
        return (
    <div className='about'>
         <Lottie className="coffee"
                                speed={0.4}  
                                options={{
                                    animationData: coffee,
                                    loop: true
                                }} 
                                
                                />
       <div className="max-width">
           <h2 className="title">About Me</h2>
           <div className="about-content">
               <div className="column left">
               <img src={me} alt={"me"}></img>
                </div>
               <div className="column right">
                   <div className="text">I'm Juhwan Moon </div>
                   <p><div className='small_title'>Hobbies</div> : Soccer, Outdoor Activities & Sports, Board Game, Weight Training</p>
                   <p><div className='small_title'>Personality</div> : Positive, Spontaneous, intuitive</p>
                   <div className="text"> I'm a <span>Junior Developer</span></div>
                   <p>2014 - 2020  :  Dankook University (Mobile System Engineering)</p>
                   <p>2020 - 2021  :  British Columbia Institute of Technology (Software Systems Developer)</p>
                   <a href="#"><FontAwesomeIcon icon={faDownload} /> Resume</a>
               </div>
            </div>
        </div>



            {/* <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
            <img src={me} alt={"me"}></img>
                    <p> I graduated from Dankook University in South Korea and my major was mobile system engineering. Now, I'm completing 'Software Systems Developer Course(Web Programmer Option)' in BCIT.<br></br><br></br> I specialize in building and design applications specific to the business needs of my clients. I have done work in software development, mobile app creation, front-end/back-end web, database/server management, web design.</p>
            </Fade>   
           
            </div> */}
          
 {/*           {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}
    */}        

        </div>  );
    }
}
 
export default About;