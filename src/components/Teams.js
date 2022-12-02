import React, { Component } from 'react';
import me from '../images/me.jpeg'
import $ from "jquery";




class Teams extends Component {
    state = {}
   

    render() {
       
        return (<div className='teams'>

            <div className='max-width'>
                <h2 className='title'></h2>
                <div className='carousel owl-carousel'>
                    <div className='card'>
                        <div className='box'>
                            <img src={me} alt={"me"}></img>
                            <div className='text'>Fitness App</div>
                            <p>asd dlasd sladasldkasldk sadjaksd osdjaksdksiqd sdaokd oqdqosdkqmdksqmd sqodj</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                        <img src={me} alt={"me"}></img>
                        <div className='text'>UBI</div>
                        <p>asd dlasd sladasldkasldk sadjaksd osdjaksdksiqd sdaokd oqdqosdkqmdksqmd sqodj</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                        <img src={me} alt={"me"}></img>
                        <div className='text'>Trusting fixels</div>
                        <p>asd dlasd sladasldkasldk sadjaksd osdjaksdksiqd sdaokd oqdqosdkqmdksqmd sqodj</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                        <img src={me} alt={"me"}></img>
                        <div className='text'>Stock App</div>
                        <p>asd dlasd sladasldkasldk sadjaksd osdjaksdksiqd sdaokd oqdqosdkqmdksqmd sqodj</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                        <img src={me} alt={"me"}></img>
                        <div className='text'>SHREDZ</div>
                        <p>asd dlasd sladasldkasldk sadjaksd osdjaksdksiqd sdaokd oqdqosdkqmdksqmd sqodj</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                        <img src={me} alt={"me"}></img>
                        <div className='text'>Note App</div>
                        <p>asd dlasd sladasldkasldk sadjaksd osdjaksdksiqd sdaokd oqdqosdkqmdksqmd sqodj</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>);
    }
}

export default Teams;


