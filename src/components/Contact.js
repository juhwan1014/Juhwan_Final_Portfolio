import React, { Component, useRef } from 'react';
import emailjs from '@emailjs/browser';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            user_name : "",
            user_email: "",
            user_message: ""
        }
      }

    render() { 



        const form = this.myRef;

        const sendEmail = (e) => {


          if( this.state.name == "" || this.state.email == "" || this.state.user_message == "" ) {
            alert("Please, fill in the all areas.")
          }
          else{
          e.preventDefault();
      
          emailjs.sendForm('service_eneofst', 'template_r2py9l8', form.current, 'Cm-hdgB0a1xz-eg33')
            .then((result) => {
                console.log(result.text);
                alert('Thank you! I will reply as soon as possible.')
                window.location.reload(false);
            }, (error) => {
                console.log(error.text);
                alert('Sorry, an error has been detected. Please, enter again.')
                window.location.reload(false);
            });
        }
       
            

            
        };

        const nameChange = (e) => {
            this.setState({
                user_name : e.target.value
            })
        }

        const emailChange = (e) => {
            this.setState({
                user_email : e.target.value
            })
        }

        const messageChange = (e) => {
            this.setState({
                user_message : e.target.value
            })
        }

        // const handleSubmit = (e) => {
        //     e.preventDefault();
        //     this.setState({ message: true })
        // }

        return (

        <div className='contact'>
            <h2 className="title">Contact</h2>
            <div className="contact_wraper">
          
            <div className="left">
                <img src="https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg" alt=""></img>
            </div>

            <div className="right">
                <h2>Please, <br></br>leave a message below. </h2>
                {/* <form onSubmit={handleSubmit}> */}
                <form ref={form} onSubmit={sendEmail}>
                    {/* <label>Name</label> */}
                    <input type="text" name="user_name" placeholder="Name" onChange={nameChange} value={this.state.user_name}/>
                    {/* <label>Email</label> */}
                    <input type="email" name="user_email" placeholder="Email" onChange={emailChange} value={this.state.user_email} />
                    {/* <label>Message</label> */}
                    <textarea name="message" placeholder="Message" onChange={messageChange} value={this.state.user_message}></textarea>
                    <input className="btn" type="submit" value="Send" />
                    {/* <button type="submit">Send</button> */}
                    {/* {this.state.message && <span>Thanks, I'll reply as soon as possible! </span>} */}
                </form>
            </div>
           
            </div>
        </div>  );
    }
}
 
export default Contact;