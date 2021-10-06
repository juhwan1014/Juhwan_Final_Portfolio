import React, { Component } from 'react';
// import { Link, animateScroll as scroll } from "react-scroll";
import $ from "jquery";
import logo from '../images/logo_juhwan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot} from '@fortawesome/free-solid-svg-icons'
import { faBars} from '@fortawesome/free-solid-svg-icons'
// import { FaBars } from 'react-icons/fa';
// import AiFillAlipayCircle  from "react-icons/ai";


class Navbar extends Component {
    state = {  }
    // scrollToTop = () => {
    //     scroll.scrollToTop();
    // };

    componentDidMount() {
      
       
        $(window).scroll(function(){
           
                    if(this.scrollY > 20){
                          $('.navbar').addClass("sticky");
                    } else {
                        $('.navbar').removeClass("sticky");
                    }
                })
        
      }
  
    render() { 


        return (<nav className = "navbar">
            
            <div className="max-width">
                <div className="logo">
                {/* <FontAwesomeIcon icon={faMugHot} /> */}
                    {/* <a href="#"><FaBars /></a> */}
                <a href="#">Portfolio <FontAwesomeIcon icon={faMugHot} /></a>
                {/* <a href="#"><img src={logo}></img></a> */}
                </div>
              
               
            <ul className="menu">

                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Contact</a></li>

            </ul>

            <div className="menu-btn">
            <h3><FontAwesomeIcon icon={faBars} /></h3>
            {/* <h3> <FaBars/> </h3> */}
            </div>

            </div>
        </nav> );
    }
}
 
export default Navbar;