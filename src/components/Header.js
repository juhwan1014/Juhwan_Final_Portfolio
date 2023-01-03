import React, { Component } from 'react';
import { init } from 'ityped'
import { Link } from "react-scroll";




class Header extends Component {
    state = {}
    componentDidMount() {
        const textRef = document.querySelector('#myElement')
        init(textRef, {
            showCursor: true, backDelay: 1500, backSpeed: 60,
            strings: ["Software Developer", "Full-Stack Developer", "Web-Developer"]
        })
    }


    render() {

        return (

            <div className='header'>
                <div className="max-width">
                    <div className="header-content">
                        <div className="text_1">Hello, my name is</div>
                        <div className="text_2">Juhwan Moon</div>
                        <div className="text_3">I'm a <span id="myElement"></span></div>

                        <Link
                            activeClass="active"
                            className='contact_btn'
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>Contact</Link>

                    </div>
                </div>


            </div>);
    }
}

export default Header;