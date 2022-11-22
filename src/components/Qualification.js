import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

class Qualification extends Component {
    state = {}
    render() {
        return (<div className='qualification'>

            <h2 className="title">Qualification</h2>

            <div className="container">
                <div className="tabs">
                    <div className="button--flex">
                        {/* <i className="uil uil-graduation-cap qualification__icon"></i> */}
                        <FontAwesomeIcon icon={faGraduationCap} className="icon"/>
                        Education
                    </div>

                    <div className="button--flex">
                        {/* <i className="uil uil-briefcase-alt qualification__icon"></i> */}
                        <FontAwesomeIcon icon={faBriefcase} className="icon"/>
                        Work
                    </div>

                </div>



                <div className="sections">
                    {/* =====================Content 1====================== */}
                    <div className="content">
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


                    {/* =====================Content 2====================== */}
                    <div className="content">
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