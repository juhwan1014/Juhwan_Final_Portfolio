import React, { Component } from 'react';

class Contact extends Component {
    state = {  }
    render() { 
        return (

        <div className='contact'>
          
            <div className="left">
                <img src="https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg" alt=""></img>
            </div>

            <div className="right">
                <h2>Contact.</h2>
                <form>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
           

        </div>  );
    }
}
 
export default Contact;