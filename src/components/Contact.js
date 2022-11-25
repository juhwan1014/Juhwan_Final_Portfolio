import React, { Component, useRef } from 'react';
import emailjs from '@emailjs/browser';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }

    render() { 



        const form = this.myRef;

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_eneofst', 'template_r2py9l8', form.current, 'Cm-hdgB0a1xz-eg33')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };


        // const handleSubmit = (e) => {
        //     e.preventDefault();
        //     this.setState({ message: true })
        // }

        return (

        <div className='contact'>
          
            <div className="left">
                <img src="https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg" alt=""></img>
            </div>

            <div className="right">
                <h2>Contact.</h2>
                {/* <form onSubmit={handleSubmit}> */}
                <form ref={form} onSubmit={sendEmail}>
                    {/* <label>Name</label> */}
                    <input type="text" name="user_name" placeholder="Name"/>
                    {/* <label>Email</label> */}
                    <input type="email" name="user_email" placeholder="Email" />
                    {/* <label>Message</label> */}
                    <textarea name="message" placeholder="Message"></textarea>
                    <input className="btn" type="submit" value="Send" />
                    {/* <button type="submit">Send</button> */}
                    {/* {this.state.message && <span>Thanks, I'll reply as soon as possible! </span>} */}
                </form>
            </div>
           

        </div>  );
    }
}
 
export default Contact;