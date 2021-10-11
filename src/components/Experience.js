import React, { Component } from 'react';
import pixels from '../images/pixels.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

class Experience extends Component {
    state = {  }
    render() { 
        return (<div className='experience'>
            <h2 className="title">Projects</h2>
        <div className="project">
         <div className="slider">
         
             <div className="container">
                 <div className="item">
                     <div className="left">
                         <div className="leftContainer">
                          <div className="imgContainer">
                       <FontAwesomeIcon icon={faMobileAlt} />
                        </div>
                        <h2>Title</h2>
                        <p>asdasdasdasda</p>
                        <span>Projects</span>
                        </div>
                     </div>
                     <div className="right">
                     <img src={pixels} alt={"pixels"}></img>
                     </div>
                 </div>
             </div>
             <FontAwesomeIcon icon={faChevronLeft} className="arrow_left"/>
         <FontAwesomeIcon icon={faChevronRight} className="arrow_right" />
         </div>
         </div>
        </div>  );
    }
}
 
export default Experience;