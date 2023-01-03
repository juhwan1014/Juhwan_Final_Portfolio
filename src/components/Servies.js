import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import java from '../images/java.png'
import fitness from '../images/muscle.jpg'
import nowflix from '../images/nowflix.png'
import stock from '../images/stock_app.png'
import parlez from '../images/PARLEZ.png'
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Aos from "aos";
import "aos/dist/aos.css";

SwiperCore.use([EffectCoverflow, Pagination]);

class Services extends Component {

    componentDidMount() {
        Aos.init({ duration: 500 });
    }

    render() {
        return (<div className='services'>

            <h2 className="title"> </h2>
            <Swiper
              
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}

                speed={500}
                pagination={{ clickable: true }}
                style={{
                    "--swiper-pagination-color": "#28231D",
                    "--swiper-navigation-size": "70px",
                    "--swiper-navigation-weight": "900"
                }}
                className="container" data-aos="fade-up">


                <SwiperSlide className="grid">
                    <div className='img_wrapper'>
                        <img src={fitness} alt="" className="project_img"></img>
                    </div>

                    <div className="data">
                        <h3 className="project_title">Fitness Helper App</h3>
                        <p className="description"><ul>
                            <li>ReactJs, RapidAPI, Personal Project</li>
                            <li>Provides exercise search function, various exercise methods, stimulation area, and exercise video</li>
                            <li>On going personal project</li>
                        </ul></p>
                        <a href="https://github.com/juhwan1014/Fitness_Helper_App" className="project_button">
                            Detail  <FontAwesomeIcon icon={faChevronRight} className="arrow_right" />
                        </a>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="grid">
                    <div className='img_wrapper'>
                        <img src={nowflix} alt="" className="project_img"></img>
                    </div>
                    <div className="data">
                        <h3 className="project_title">Nowflix(Movie App)</h3>
                        <p className="description"><ul>
                            <li>Swift, Firebase, TMDB API, Apple Itunes API, Personal Project</li>
                            <li>Provides movie search function, movie information, short movie video clips, and search history function</li>
                            <li>Sign in/ Sign up functions with Firebase</li>
                        </ul></p>
                        <a href="https://github.com/juhwan1014/Nowflix-ios-App_Personal-Project" className="project_button">
                            Detail  <FontAwesomeIcon icon={faChevronRight} className="arrow_right" />
                        </a>
                    </div>
                </SwiperSlide>


                <SwiperSlide className="grid">
                    <div className='img_wrapper'>
                        <img src={stock} alt="" className="project_img"></img>
                    </div>
                    <div className="data">
                        <h3 className="project_title">Stock App</h3>
                        <p className="description"><ul>
                            <li>React Native, Firebase, FinnHub API, Group Project(FrontEnd App Design)</li>
                            <li>Provides Stock data, and selling and buying system, manage own stock items</li>
                            <li>Sign in/ Sign up functions with Firebase</li>
                        </ul></p>
                        <a href="https://github.com/juhwan1014/Final-Mobile-Project_Stock_App" className="project_button">
                            Detail  <FontAwesomeIcon icon={faChevronRight} className="arrow_right" />
                        </a>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="grid">
                    <div className='img_wrapper'>
                        <img src={parlez} alt="" className="project_img"></img>
                    </div>
                    <div className="data">
                        <h3 className="project_title">PARLEZ(Chat App)</h3>
                        <p className="description"><ul>
                            <li>React, .Net API, Group Project(FrontEnd App Design)</li>
                            <li>Provides common chatroom to post messages, read and delete existing messages</li>
                            <li>Sign in/ Sign up functions with Firebase</li>
                        </ul></p>
                        <a href="https://github.com/juhwan1014/PARLEZ_Chat-Web-App" className="project_button">
                            Detail  <FontAwesomeIcon icon={faChevronRight} className="arrow_right" />
                        </a>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="grid">
                    <div className='img_wrapper'>
                        <img src={java} alt="" className="project_img"></img>
                    </div>
                    <div className="data">
                        <h3 className="project_title">Java Programming</h3>
                        <p className="description"><ul>
                            <li>Base 64 Encoding & Decoding Program</li>
                            <li>Resource Map Simulator</li>
                            <li>DES Encryption Project</li>
                            <li>Class Hierarchy Practice Project</li>
                        </ul></p>
                        <a href="https://github.com/juhwan1014/Base64_Encoding-decoding_Program" className="project_button">
                            Detail  <FontAwesomeIcon icon={faChevronRight} className="arrow_right" />
                        </a>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>);
    }
}

export default Services;