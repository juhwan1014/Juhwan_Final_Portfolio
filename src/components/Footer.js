import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

class Footer extends Component {
    state = {  }
    render() { 
        return (<div className='footer'>
            
            <p>Juhwan Moon</p>
		<p>For more HTML, CSS, and coding tutorial - please click on the link below to subscribe to my channel:</p>
		<div class="social">
			<a href="#"><FaGithub /></a>
			<a href="#"><FaLinkedin /></a>
			<a href="#"><FaFacebook /></a>
		</div>
		<p class="end">CopyRight By Tahmid Ahmed</p>

        </div>  );
    }
}
 
export default Footer;