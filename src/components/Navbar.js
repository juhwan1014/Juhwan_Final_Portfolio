import React, { Component } from 'react';
// import { Link, animateScroll as scroll } from "react-scroll";
import $ from "jquery";
import logo from '../images/logo_juhwan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot} from '@fortawesome/free-solid-svg-icons'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
// import { FaBars } from 'react-icons/fa';
// import AiFillAlipayCircle  from "react-icons/ai";




class Navbar extends Component {
      
    constructor(props){
        super(props);
        this.state = {
            hamburgerToggle : false,
        };
    }


    // scrollToTop = () => {
    //     scroll.scrollToTop();
    // };

    componentDidMount() {
      
        
       
        $(window).scroll(function(){
           
                    if(this.scrollY > 20){
                          $('.navbar').addClass("navColor");
                    } else {
                        $('.navbar').removeClass("navColor");
                    }
                })

        $('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('faTimes').toggleClass("active");
        })
        
      }
      
      handleClick = event => {
          this.setState({
              hamburgerToggle: !this.state.hamburgerToggle,
          });
      };

  
    render() { 

        
        // const {hamburgerToggle} = this.state;
        

        return (<nav className = "navbar">
            
            <div className="max-width">
                <div className="logo">
                {/* <FontAwesomeIcon icon={faMugHot} /> */}
                    {/* <a href="#"><FaBars /></a> */}
                <a href="#">Portfolio <FontAwesomeIcon icon={faMugHot} /></a>
                {/* <a href="#"><img src={logo}></img></a> */}
                </div>
              
               
            <ul className="menu">

                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Experience">Projects</a></li>
                <li><a href="#Contact">Contact</a></li>

            </ul>

            <div className="menu-btn">
              
           {/* <h3 onClick={this.handleClick}>{ hamburgerToggle ? 
           <FontAwesomeIcon icon={faTimes} /> :
               <FontAwesomeIcon icon={faBars} />
           }
               </h3> */}
            <h3> <FontAwesomeIcon
              onClick={this.handleClick}
             icon={this.state.hamburgerToggle ? faTimes : faBars } /></h3>
           
                
            {/* <h3> <FaBars/> </h3> */}
            </div>

            </div>
        </nav> );
    }
}
 
export default Navbar;