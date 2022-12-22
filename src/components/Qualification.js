import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import Aos from "aos";
import "aos/dist/aos.css";



class Qualification extends Component {
    
    componentDidMount() {
        Aos.init({ duration: 2000 });
      }

    
    render() {
        

        
        return (<div className='qualification'>

            <h2 className="title">Qualification</h2>

            <div data-aos="zoom-in-up" className="container">
                <div className="tabs">
                    <div className="button--flex qualification__active" data-target="#education">
                        {/* <i className="uil uil-graduation-cap qualification__icon"></i> */}
                        <FontAwesomeIcon icon={faGraduationCap} className="icon"/>
                        Education
                    </div>

                    <div className="button--flex" data-target="#work">
                        {/* <i className="uil uil-briefcase-alt qualification__icon"></i> */}
                        <FontAwesomeIcon icon={faBriefcase} className="icon"/>
                        Work
                    </div>

                </div>



                <div className="sections">
                    {/* =====================Content 1====================== */}
                    <div className="content qualification__active" data-content id="education">
                        {/* =====================Content Data 1====================== */}
                        <div className="content_data">
                            <div className="content_data_left">
                                <h3 className="quali_title">Mobile Systems Engineering</h3>
                                <span className="quali_subtitle">Dankook University</span>
                                <div className="calendar">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="cal_icon" />
                                    2014.Feb - 2020.Feb
                                </div>
                            </div>

                            <div>
                                <span className="rounder"><div className='year1'>2014</div></span>
                                <span className="line"></span>
                            </div>

                        </div>
                        {/* =====================Content Data 2====================== */}
                        <div className="content_data">
                            <div></div>

                            <div>
                                <span className="rounder"><div className='year2'>2016</div></span>
                                <span className="line"></span>
                            </div>
                            <div className="content_data_right">
                                <h3 className="quali_title">Math Tutor</h3>
                                <span className="quali_subtitle">South Korea</span>
                                <div className="calendar">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="cal_icon"/>
                                    2015.Mar - 2016.Apr
                                </div>
                            </div>

                        </div>
                    
                        {/* =====================Content Data 3====================== */}
                        <div className="content_data">
                            <div className="content_data_left">
                                <h3 className="quali_title">Software Systems Developer (Web Developer Course)</h3>
                                <span className="quali_subtitle">BCIT (British Columbia Institute of Technology)</span>
                                <div className="calendar">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="cal_icon"/>
                                    2020.Sep - 2021.May
                                </div>
                            </div>

                            <div>
                                <span className="rounder"><div className='year1'>2020</div></span>
                                <span className="line"></span>
                            </div>

                        </div>

                        {/* =====================Content Data 4====================== */}
                        <div className="content_data">
                            <div></div>

                            <div>
                                <span className="rounder"><div className='year2'>2022</div></span>
                                {/* <span className="line"></span> */}
                            </div>

                            <div className="content_data_right">
                                <h3 className="quali_title">Full-Stack Developer (Internship)</h3>
                                <span className="quali_subtitle">ICBC(Insurance Corporation of British Columbia)</span>
                                <div className="calendar">
                                    <FontAwesomeIcon icon={faCalendarAlt} className="cal_icon" />
                                    2022.Feb - 2022.Aug
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* =====================Content 2====================== */}
                    <div className="content" data-content id="work">
                        {/* =====================Content Data 1====================== */}
                        <div className="content_data">
                            <div>
                                <h3 className="quali_title">Computer Engineer</h3>
                                <span className="quali_subtitle">Dankook University</span>
                                <div className="calendar">
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                    2014 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="rounder"></span>
                                <span className="line"></span>
                            </div>

                        </div>
                        {/* =====================Content Data 2====================== */}
                        <div className="content_data">
                            <div></div>

                            <div>
                                <span className="rounder"></span>
                                <span className="line"></span>
                            </div>
                            <div>
                                <h3 className="quali_title">Web Design</h3>
                                <span className="quali_subtitle">South Korea - Institute</span>
                                <div className="calendar">
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                    2020 - 2021
                                </div>
                            </div>

                        </div>
                        {/* =====================Content Data 3====================== */}
                        <div className="content_data">
                            <div>
                                <h3 className="quali_title">FullStack Web Developer</h3>
                                <span className="quali_subtitle">ICBC</span>
                                <div className="calendar">
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                    2021 - 2022
                                </div>
                            </div>

                            <div>
                                <span className="rounder"></span>
                                <span className="line"></span>
                            </div>

                        </div>

                        {/* =====================Content Data 4====================== */}
                        <div className="content_data">
                            <div></div>

                            <div>
                                <span className="rounder"></span>
                                {/* <span className="line"></span> */}
                            </div>

                            <div>
                                <h3 className="quali_title">Master in UI</h3>
                                <span className="quali_subtitle">South Korea - Institute</span>
                                <div className="calendar">
                                    <FontAwesomeIcon icon={faCalendarAlt} />
                                    2022 - 2022
                                </div>
                            </div>

                        </div>
                    </div>




                </div>

            </div>



        </div>);
    }
}

export default Qualification;