import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import pixels from '../images/Swift_ReactNative.jpeg'
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Aos from "aos";
import "aos/dist/aos.css";



SwiperCore.use([Navigation, Pagination]);

class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
        };
    }
    componentDidMount() {
        Aos.init({ duration: 2000 });
    }

    render() {

        return (<div className='experience'>
            <h2 className="title">Projects</h2>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                speed={1000}
                scrollbar={{ draggable: true }}
                navigation={true}
                pagination={{ clickable: true }}
                style={{
                    "--swiper-navigation-color": "#28231D",
                    "--swiper-pagination-color": "#28231D",
                    "--swiper-navigation-size": "70px",
                    "--swiper-navigation-weight": "900"
                }}
                className="container" data-aos="fade-up">

                <SwiperSlide className="grid">
                    <div className='img_wrapper'>
                        <img src={pixels} alt="" className="project_img"></img>
                    </div>

                    <div className="data">
                        <h3 className="project_title">Trusting Pixels - Mobile Application</h3>
                        <p className="description"><ul>
                            <li>Modified <span>React Native</span> Code and added new code work</li>
                            <li>Ejected React-Native code and made Camera function(Image Picker) in <span>Swift</span></li>
                            <li><span>Improved UX</span> by making about <span>20%</span> of existing UI</li>
                            <li>Re-create <span>Cognito</span> and made it possible to change the username</li>
                        </ul></p>
                        <h4>*** For this project, I can't show code detail because of NDA(Non-disclosure agreement) ***</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="grid">
                    <div className='img_wrapper'>
                        <img src="https://s3-us-west-2.amazonaws.com/jerry-uploads-prod/article/images/policy-insurance-car-cash-money-toy-vehicle-transport-auto-accident-examine-contract-safety_t20_zWOQ7Q.jpg" alt="" className="project_img"></img>
                    </div>
                    <div className="data">
                        <h3 className="project_title">UBI(Usage Based Insurance) Project - Web Application</h3>
                        <p className="description">
                            <ul>
                                <li>Developed <span>Front End</span> side</li>
                                <li>Made each page <span>authenticated</span></li>
                                <li>Connected with <span>SQL</span> Database</li>
                                <li>Constructed double layer <span>validation</span> system (Client Side & Server side)</li>
                                <li>Implemented <span>File Download System</span></li>
                                <li>Made a Temporary Folder to improve the performance of <span>download speed</span></li>
                            </ul>
                        </p>
                        <h4>*** It was On-Going project, and only accessible within company laptop. ***</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="grid">
                    <div className='img_wrapper'>
                        <img src="https://ifh.cc/g/czNxTa.jpg" alt="" className="project_img"></img>
                    </div>
                    <div className="data">
                        <h3 className="project_title">Note_App - Web Application</h3>
                        <p className="description"> <ul>
                            <li>Serverless Project using <span>AWS</span> Services</li>
                            <li>Four collections of items: a set of images/hyperlinks, a list of to-do items, and a set of notes</li>
                            <li><span>React</span> Web application Project</li>
                            <li>Implemented <span>sign-up/in</span> function with user managing system</li>
                            <li>Used AWS Lambda, Cognito, S3 bucket, Node.js, DynamoDB</li>
                        </ul></p>
                        <a href="https://github.com/juhwan1014/AWS_React_Note-Web-App_FrontEnd" className="project_button">
                            Detail  <FontAwesomeIcon icon={faChevronRight} className="arrow_right" />
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>);
    }
}

export default Experience;