import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import java from '../images/java.png'
import fitness from '../images/muscle.jpg'
import nowflix from '../images/nowflix.png'
import reactnative from '../images/ReactNative.jpg'
import stock from '../images/stock_app.png'


import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination]);

class Services extends Component {
    state = {  }
    render() { 
        return (<div className='services'>
            
            <h2 className="title"></h2>
            <Swiper 
        //    spaceBetween={50}
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

           speed={1000}
        //    modules={[EffectCoverflow, Pagination]}
           pagination={{ clickable: true }}
           style={{
            "--swiper-pagination-color": "#28231D",
            "--swiper-navigation-size": "70px",
            "--swiper-navigation-weight": "900"
         }}
         className="container">
            





            <SwiperSlide className="grid">
                <div className='img_wrapper'>
                <img src={fitness} alt="" className="project_img"></img>
                </div>

                <div className="data">
                    <h3 className="project_title">Fitness Helper App</h3>
                    <p className="description">lasdasda asdasdad asdsdrbrwfe wededqidqnd qedqdjqeidqwd qwdqwdjqiwd qwdjqwdniqwnd qwdjqwidjiqwd wqidjqiwdqwd qwdjqwd qwidjqiwd widjwiqd qwdjqiwdn wjjqwidqw dn</p>
                    <a href="#" className="project_button">
                        Detail  <FontAwesomeIcon icon={faChevronRight} className="arrow_right"/>
                    </a>
                </div>   
            </SwiperSlide>


            <SwiperSlide className="grid">
            <div className='img_wrapper'>
                <img src={nowflix} alt="" className="project_img"></img>
            </div>
                <div className="data">
                    <h3 className="project_title">Nowflix</h3>
                    <p className="description">lasdasda asdasdad asdsdrbrwfe wededqidqnd qedqdjqeidqwd qwdqwdjqiwd qwdjqwdniqwnd qwdjqwidjiqwd wqidjqiwdqwd qwdjqwd qwidjqi</p>
                    <a href="#" className="project_button">
                        Detail  <FontAwesomeIcon icon={faChevronRight} className="arrow_right"/>
                    </a>
                </div>   
            </SwiperSlide>


            <SwiperSlide className="grid">
            <div className='img_wrapper'>
                <img src={stock} alt="" className="project_img"></img>
            </div>
                <div className="data">
                    <h3 className="project_title">Stock App</h3>
                    <p className="description">lasdasda asdasdad asdsdrbrwfe wededqidqnd qedqdjqeidqwd qwdqwdjqiwd qwdjqwdniqwnd qwdjqwidjiqwd wqidjqiwdqwd</p>
                    <a href="#" className="project_button">
                        Detail  <FontAwesomeIcon icon={faChevronRight} className="arrow_right"/>
                    </a>
                </div>   
            </SwiperSlide>

            <SwiperSlide className="grid">
            <div className='img_wrapper'>
                <img src={reactnative} alt="" className="project_img"></img>
            </div>
                <div className="data">
                    <h3 className="project_title">Small React Native Apps</h3>
                    <p className="description">lasdasda asdasdad asdsdrbrwfe wededqidqnd qedqdjqeidqwd qwdqwdjqiwd qwdjqwdniqwnd qwdjqwidjiqwd wqidjqiwdqw</p>
                    <a href="#" className="project_button">
                        Detail  <FontAwesomeIcon icon={faChevronRight} className="arrow_right"/>
                    </a>
                </div>   
            </SwiperSlide>

            <SwiperSlide className="grid">
            <div className='img_wrapper'>
                <img src={java} alt="" className="project_img"></img>
            </div>
                <div className="data">
                    <h3 className="project_title">Java Programming</h3>
                    <p className="description">lasdasda asdasdad asdsdrbrwfe wededqidqnd qedqdjqeidqwd qwdqwdjqiwd qwdjqwdniqwnd qwdjqwidjiqwd wqidjqiwdq</p>
                    <a href="#" className="project_button">
                        Detail  <FontAwesomeIcon icon={faChevronRight} className="arrow_right"/>
                    </a>
                </div>   
            </SwiperSlide>





         </Swiper>
        </div>  );
    }
}
 
export default Services;