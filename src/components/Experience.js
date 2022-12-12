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
                    <h3 className="project_title">Trusting Pixels</h3>
                    <p className="description">lasdasda asdasdad asdsdrbrwfe wededqidqnd qedqdjqeidqwd qwdqwdjqiwd qwdjqwdniqwnd qwdjqwidjiqwd wqidjqiwdqwd qwdjqwd qwidjqiwd widjwiqd qwdjqiwdn wjjqwidqw dn</p>
                   <h4>*** For this project, I can't show code detail because of NDA(Non-disclosure agreement) ***</h4>
                </div>   
            </SwiperSlide>


            <SwiperSlide className="grid">
            <div className='img_wrapper'>
                <img src="https://s3-us-west-2.amazonaws.com/jerry-uploads-prod/article/images/policy-insurance-car-cash-money-toy-vehicle-transport-auto-accident-examine-contract-safety_t20_zWOQ7Q.jpg" alt="" className="project_img"></img>
            </div>
                <div className="data">
                    <h3 className="project_title">UBI</h3>
                    <p className="description">lasdasda asdasdad asdsdrbrwfe wededqidqnd qedqdjqeidqwd qwdqwdjqiwd qwdjqwdniqwnd qwdjqwidjiqwd wqidjqiwdqwd qwdjqwd qwidjqiwd widjwiqd qwdjqiwdn wjjqwidqw dn</p>
                    <h4>*** It was On-Going project, and only accessible within company laptop. ***</h4>
                </div>   
            </SwiperSlide>


            <SwiperSlide className="grid">
            <div className='img_wrapper'>
                <img src="https://ifh.cc/g/czNxTa.jpg" alt="" className="project_img"></img>
            </div>
                <div className="data">
                    <h3 className="project_title">Note-App</h3>
                    <p className="description">lasdasda asdasdad asdsdrbrwfe wededqidqnd qedqdjqeidqwd qwdqwdjqiwd qwdjqwdniqwnd qwdjqwidjiqwd wqidjqiwdqwd qwdjqwd qwidjqiwd widjwiqd qwdjqiwdn wjjqwidqw dn</p>
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