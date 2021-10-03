import React, { Component } from 'react';

class Header extends Component {
    state = {}
    render() {
        return (<div className='header'>
            <div className="max-width">
                <div className="header-content">
                    <div className="text_1">Hello, my name is</div>
                    <div className="text_2">Juhwan Moon</div>
                    <div className="text_3">And I'm a <span>Software Developer</span></div>

                </div>
            </div>
        </div>);
    }
}

export default Header;