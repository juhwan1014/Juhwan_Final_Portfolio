import React, { Component } from 'react';
import resume from "./JuhwanMoon_Resume.pdf"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import me from '../images/me.jpeg'
import Aos from "aos";
import "aos/dist/aos.css";




class About extends Component {
    componentDidMount() {
        Aos.init({ duration: 2000 });
    }

    render() {
        return (
            <div className='about'>
                <div className="max-width">
                    <h2 className="title">About Me</h2>
                    <div className="about-content">
                        <div className="column left">
                            <img src={me} alt={"me"}></img>
                        </div>
                        <div data-aos="fade-left" className="column right">
                            <div className="text">I'm Juhwan Moon </div>
                            <p><div className='small_title'>Hobbies</div> : Soccer, Outdoor Activities & Sports, Board Game, Weight Training</p>
                            <p><div className='small_title'>Personality</div> : Positive, Spontaneous, intuitive</p>
                            <div className="text"> I'm a <span>Junior Developer</span></div>
                            <ul className="introduce">
                                <li><span>A full four-year scholarship</span> in Dankook University</li>
                                <li>Graduated from <span>BCIT</span>(British Columbia Institute of Technology)</li>
                                <li><span>Industry</span>("Trusting Pixels Inc.") Team Project Experience </li>
                                <li>Full-Stack Developer Intern in <span>ICBC</span>(Insurance Coporation of  British Columbia)</li>
                            </ul>
                            <a href={resume} download><FontAwesomeIcon icon={faDownload} /> Resume</a>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default About;