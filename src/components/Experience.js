import React, { Component } from 'react';
import pixels from '../images/pixels.jpg';
import Swift_ReactNative from '../images/Swift_ReactNative.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { data } from 'jquery';
import $ from "jquery";

class Experience extends Component {

    constructor(props){
        super(props);
        this.state={
            currentSlide : 0,
        };
    }

   
    
    handleClick = (way) => {
      
       way === "left"  ?
        this.state.currentSlide > 0 ? 
        this.setState({
            currentSlide: this.state.currentSlide - 1
        }) :  
        this.setState({
            currentSlide: 2
        }) :
        this.state.currentSlide < data.length - 1 ?
        this.setState({
            currentSlide: this.state.currentSlide + 1
        }) :
        this.setState({
            currentSlide: 0
        }) 
        console.log(this.state.currentSlide)
    };

  
    render() { 
        const data = [
            {
                id: "1",
                icon: "./assets/mobile.png",
                title: "Web Design",
                desc:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                // img:
                //   "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
                img: "https://i.imgur.com/WhlXW0z.jpg",
              },
              {
                id: "2",
                icon: "./assets/globe.png",
                title: "Mobile Application",
                desc:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                img:
                  "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
              },
              {
                id: "3",
                icon: "./assets/writing.png",
                title: "Branding",
                desc:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                img:
                  "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
              },
        ]
        return (<div className='experience'>
            <h2 className="title">Projects</h2>
        <div className="project">
         <div className="slider" 
         style={{transform: `translateX(-${this.state.currentSlide *100}vw)`}}
         >
         
            { data.map(d=>(

            <div className="container">
                 <div className="item">
                     <div className="left">
                         <div className="leftContainer">
                          <div className="imgContainer">
                       <FontAwesomeIcon icon={faMobileAlt} />
                        </div>
                        {/* <h2>Title</h2> */}
                        <h2>{d.title}</h2>
                        <p>asdasdasdasda</p>
                        <span>Projects</span>
                        </div>
                     </div>
                     <div className="right">
                     {/* <img src={pixels} alt={"pixels"}></img> */}
                     <img src={d.img} alt={""}></img>
                     </div>
                 </div>
             </div>
               ))
    }
            
         </div>
         <div className="arrows">
         <FontAwesomeIcon icon={faChevronLeft} className="arrow_left" onClick={() => this.handleClick("left")}/>
         <FontAwesomeIcon icon={faChevronRight} className="arrow_right" onClick={() =>  this.handleClick("right")} />
         </div>
         </div>








         
        </div>  );
    }
}
 
export default Experience;