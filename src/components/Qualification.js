import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

class Qualification extends Component {
    state = {  }
    render() { 
        return (<div className='qualification'>
            
            <h2 className = "title">Qualification</h2>

            <div className="container">
                <div className="tabs">
                    <div className="button--flex">
                        {/* <i className="uil uil-graduation-cap qualification__icon"></i> */}
                        <FontAwesomeIcon icon={faGraduationCap} />
                        Education
                    </div>

                    <div className="button--flex">
                        {/* <i className="uil uil-briefcase-alt qualification__icon"></i> */}
                        <FontAwesomeIcon icon={faBriefcase} />
                        Work
                    </div>

                </div>



             <div className="sections">
                <div className="content">
                    <div className="content_data">
                        <div>
                            <h3 className="quali_title">Computer Engineer</h3>
                            <span className="quali_subtitle">Dankook University</span>
                        </div>
                    </div>
                </div>
             </div>


            </div>
            
            

        </div>  );
    }
}
 
export default Qualification;