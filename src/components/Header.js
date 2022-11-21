import React, { Component } from 'react';

class Header extends Component {
    state = {}
    render() {
        return (<div className='header'>
            <div className="max-width">
            {/* <h1 className='heading-background'>POSSIBLE</h1> */}
                <div className="header-content">
                    <div className="text_1">Hello, my name is</div>
                    <div className="text_2">Juhwan Moon</div>
                    <div className="text_3">And I'm a <span>Software Developer</span></div>
                    <a href={`mailto:$juhwan0718@gmail.com`} rel="noopenner norefferer">Contact</a>
                    {/* <a href="juhwan0718@gmail.com">Contact</a> */}
                </div>
            </div>

            {/* <p>asdasdadsasdakdkasmkankcnkdmaksndkkndksqndkqsndkqsndkqnskdnqskdnkqsndkqsndkqnsd
                qskdnqksdnkqsndkqsndkqnskdnqskdnlkqsndlkqndkqnskdnqskldnqksndklqnsdklsqndkqnkdn
                qskdnqlksdnkqlnsdkqnskdnqkslndkqlsndkqnsdkqnsdklqnsdklnqskdnqksndkqsndknqsdq
                sqdnqsndklqsndklqnsdklq
            </p> */}
        </div>);
    }
}

export default Header;