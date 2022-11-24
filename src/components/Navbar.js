import React, { Component } from 'react';
// import { Link, animateScroll as scroll } from "react-scroll";
import $ from "jquery";
import logo from '../images/logo_juhwan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot} from '@fortawesome/free-solid-svg-icons'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
// import { Link } from "react-router-dom"
import { Link, animateScroll as scroll } from "react-scroll";
// import { FaBars } from 'react-icons/fa';
// import AiFillAlipayCircle  from "react-icons/ai";




class Navbar extends Component {
      
    constructor(props){
        super(props);
        this.state = {
            hamburgerToggle : false,
        };
    }


    scrollToTop = () => {
        scroll.scrollToTop();
    };

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
                <a href="#">Portfo<span>lio</span> <FontAwesomeIcon icon={faMugHot} className="icon" /></a>
                {/* <a href="#"><img src={logo}></img></a> */}
                </div>
              
               
            {/* <ul className="menu">

                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/qualification">Qualification</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/experience">Projects</a></li>
                <li><a href="/contact">Contact</a></li>

            </ul> */}

            <ul className="menu">

            <li><Link
                    activeClass="active"
                    className='link'
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}>Home</Link></li>
            <li><Link
                    activeClass="active"
                    className='link'
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>About</Link></li>
            <li><Link
                    activeClass="active"
                    className='link'
                    to="qualification"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Qualification</Link></li>
            <li><Link 
                    activeClass="active"
                    className='link'
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Skills</Link></li>
            <li><Link
                    activeClass="active"
                    className='link'
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Projects</Link></li>
            <li><Link 
                    activeClass="active"
                    className='link'
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Contact</Link></li>

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