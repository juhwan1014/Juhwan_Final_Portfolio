import React, { Component } from 'react';
// import { Link, animateScroll as scroll } from "react-scroll";
import $ from "jquery";
// import { FaBars } from 'react-icons/fa';

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
                    <a href="#">Port<span>folio.</span></a>
                </div>
            <ul>

                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Contact</a></li>
               

            </ul>

            <div className="menu-btn">
            {/* <h3> <FaBars/> </h3> */}
            </div>

            </div>
        </nav> );
    }
}
 
export default Navbar;