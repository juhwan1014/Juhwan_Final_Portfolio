import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import pixels from '../images/Swift_ReactNative.jpeg'

// import { Swiper, SwiperSlide } from 'swiper/react';


// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'

// import 'swiper/components/pagination/pagination.min.css'
// import 'swiper/components/navigation/navigation.min.css'
// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";



// import 'swiper/modules/effect-fade/effect-fade';
// import "swiper/modules/navigation/navigation";
// import "swiper/modules/pagination/pagination";

SwiperCore.use([Navigation, Pagination]);

class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
        };
    }



  


    render() {
    
        return (<div className='experience'>

{/* <Swiper
      spaceBetween={50}
      slidesPerView={1}
    navigation={true}
    pagination={true}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper> */}
    

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
         className="container">
        
            {/* <div className="qwqwqwqwqw"> */}


            <SwiperSlide className="grid">
                <div className='img_wrapper'>
                <img src={pixels} alt="" className="project_img"></img>
                </div>

                <div className="data">
                    <h3 className="project_title">Trusting Pixels - Mobile Application</h3>
                    {/* <p className="description">lasdasda asdasdad asdsdrbrwfe wededqidqnd qedqdjqeidqwd qwdqwdjqiwd qwdjqwdniqwnd qwdjqwidjiqwd wqidjqiwdqwd qwdjqwd qwidjqiwd widjwiqd qwdjqiwdn wjjqwidqw dn</p> */}
                    <p className="description"><ul>
                        <li>Modified React Native Code and added new code work</li>
                        <li>Re-create Cognito, AWS Elastic Beanstalk</li>
                        <li>Ejected React-Native code and made Camera function(Image Picker) in Swift</li>
                        <li>Updated profile page and made setting menu </li>
                        <li>Removed attributes from Cognito and made it possible to change the username</li>
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
                            <li>Developed Front End side</li>
                            <li>Made each page authenticated</li>
                            <li>Connected with SQL Database</li>
                            <li>Constructed double layer validation system (Client Side & Server side)</li>
                            <li>Implemented File Download System</li>
                            <li>Made a Temporary Folder to improve the performance of download speed</li>
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
                            <li>Serverless Project using AWS Services</li>
                            <li>Four collections of items: a set of images/hyperlinks, a list of to-do items, and a set of notes</li>
                            <li>React Web application Project</li>
                            <li>Implemented Authentication Function</li>
                            <li>Used AWS, Lambda, Cognito, S3 bucket, React, Node.js, DynamoDB</li>
                        </ul></p>
                    <a href="https://github.com/juhwan1014/AWS_React_Note-Web-App_FrontEnd" className="project_button">
                        Detail  <FontAwesomeIcon icon={faChevronRight} className="arrow_right"/>
                    </a>
                </div>   
            </SwiperSlide>


            {/* </div> */}

           </Swiper>









        </div>);
    }
}

export default Experience;