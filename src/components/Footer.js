import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
// import { FaFacebook } from 'react-icons/fa';

class Footer extends Component {
    state = {  }
    render() { 
        return (<div className='footer'>
            
            <p>Juhwan Moon</p>
		<p>For more my information and code details of my other projects,  please click on the link below</p>
		<div class="social">
			<a href="https://github.com/juhwan1014"><FaGithub /></a>
			<a href="https://www.linkedin.com/in/juhwan1014/"><FaLinkedin /></a>
			{/* <a href="#"><FaFacebook /></a> */}
		</div>
		<p class="end">CopyRight By Juhwan Moon</p>

        </div>  );
    }
}
 
export default Footer;