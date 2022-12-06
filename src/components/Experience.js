import React, { Component,useRef, useState } from 'react';
import pixels from '../images/pixels.jpg';
import Swift_ReactNative from '../images/Swift_ReactNative.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { data } from 'jquery';
import $ from "jquery";
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

<Swiper
      spaceBetween={50}
      slidesPerView={1}
    //   centeredSlides
    //   onSlideChange={() => console.log("slide change")}
    //   onSwiper={swiper => console.log(swiper)}
    navigation={true}
    pagination={true}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
    

            {/* <h2 className="title">Projects</h2>
            
           <div className="container">
        
<div>
           <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </div>


            <div className="grid">
                <img src="./images/mobile.png" alt="" className="project_img"></img>

                <div className="data">
                    <h3 className="project_title">Trusting Pixels</h3>
                    <p className="description">lasdasda asdasdad asdsdrbrwfe wededqidqnd qedqdjqeidqwd qwdqwdjqiwd qwdjqwdniqwnd qwdjqwidjiqwd wqidjqiwdqwd qwdjqwd qwidjqiwd widjwiqd qwdjqiwdn wjjqwidqw dn</p>
                    <a href="#" className="project_button">
                        Detail  <FontAwesomeIcon icon={faChevronRight} className="arrow_right"/>
                    </a>
                </div>   
            </div>


            <div className="grid">
                <img src="./images/mobile.png" alt="" className="project_img"></img>

                <div className="data">
                    <h3 className="project_title">Trusting Pixels</h3>
                    <p className="description">lasdasda asdasdad asdsdrbrwfe wededqidqnd qedqdjqeidqwd qwdqwdjqiwd qwdjqwdniqwnd qwdjqwidjiqwd wqidjqiwdqwd qwdjqwd qwidjqiwd widjwiqd qwdjqiwdn wjjqwidqw dn</p>
                    <a href="#" className="project_button">
                        Detail  <FontAwesomeIcon icon={faChevronRight} className="arrow_right"/>
                    </a>
                </div>   
            </div>


            <div className="grid">
                <img src="./images/mobile.png" alt="" className="project_img"></img>

                <div className="data">
                    <h3 className="project_title">Trusting Pixels</h3>
                    <p className="description">lasdasda asdasdad asdsdrbrwfe wededqidqnd qedqdjqeidqwd qwdqwdjqiwd qwdjqwdniqwnd qwdjqwidjiqwd wqidjqiwdqwd qwdjqwd qwidjqiwd widjwiqd qwdjqiwdn wjjqwidqw dn</p>
                    <a href="#" className="project_button">
                        Detail  <FontAwesomeIcon icon={faChevronRight} className="arrow_right"/>
                    </a>
                </div>   
            </div>

           </div>



 */}





        </div>);
    }
}

export default Experience;