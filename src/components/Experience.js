import React, { Component } from 'react';
import pixels from '../images/pixels.jpg';
import Swift_ReactNative from '../images/Swift_ReactNative.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { data } from 'jquery';
import $ from "jquery";

class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
        };
    }



    handleClick = (way) => {

        way === "left" ?

            this.state.currentSlide > 0 ?
                this.setState({
                    currentSlide: this.state.currentSlide - 1
                }) :
                this.setState({
                    currentSlide: 2
                }) 
                

                :


            this.state.currentSlide < data.length + 1 - 1 ?
                this.setState({
                    currentSlide: this.state.currentSlide + 1
                }) :
                this.setState({
                    currentSlide: 0
                })

        console.log(this.state.currentSlide)
        console.log(data.length)
    };


    render() {
        const data = [
            {
                id: "1",
                icon: "./images/mobile.png",
                title: "Fitness Helper Web Application",
                desc:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                // img:
                //   "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
                img: "https://i.imgur.com/WhlXW0z.jpg",
            },
            {
                id: "2",
                icon: "./images/mobile.png",
                title: "UBI(Usage Based Insurance) Project",
                desc:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                // img:
                //   "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
                // img: "https://i.imgur.com/WhlXW0z.jpg",
                img: "https://s3-us-west-2.amazonaws.com/jerry-uploads-prod/article/images/policy-insurance-car-cash-money-toy-vehicle-transport-auto-accident-examine-contract-safety_t20_zWOQ7Q.jpg"
            },
            {
                id: "3",
                icon: "./images/globe.png",
                title: "Trusting Pixels (Industry Project)",
                desc:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                
                img: "https://i.imgur.com/WhlXW0z.jpg",
            },
            {
                id: "4",
                icon: "./images/writing.png",
                title: "To-do list & Note Application",
                desc:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                img:
                    "https://ifh.cc/g/czNxTa.jpg",
            }
        ]
        return (<div className='experience'>
            <h2 className="title">Projects</h2>
            <div className="project">
                <div className="slider"
                    style={{ transform: `translateX(-${this.state.currentSlide * 100}vw)` }}
                >

                    {data.map(d => (

                        <div className="container">
                            <div className="item">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="project_title">
                                        <div className="imgContainer">
                                            <FontAwesomeIcon icon={faMobileAlt} />
                                            {/* <img src={d.icon} alt={""}></img> */}
                                        </div>
                                        {/* <h2>Title</h2> */}
                                        <h2>{d.title}</h2>
                                        </div>
                                        {/* <p>asdasdasdasda</p> */}
                                        <p>{d.desc}</p>
                                        <span>Projects</span>
                                    </div>
                                </div>
                                <div className="right">
                                    {/* <img src={pixels} alt={"pixels"}></img> */}
                                    <img src={d.img} alt={""}></img>
                                </div>
                            </div>
                        </div>
                    ))
                    }

                </div>
                <div className="arrows">
                    <FontAwesomeIcon icon={faChevronLeft} className="arrow_left" onClick={() => this.handleClick("left")} />
                    <FontAwesomeIcon icon={faChevronRight} className="arrow_right" onClick={() => this.handleClick("right")} />
                </div>
            </div>









        </div>);
    }
}

export default Experience;