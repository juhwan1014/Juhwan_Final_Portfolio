import React, { Component } from 'react';
import me from '../images/me.jpeg'
import $ from "jquery";




class Teams extends Component {
    state = {}
   

    render() {
       
        return (<div className='teams'>

            <div className='max-width'>
                <h2 className='title'>My Teams</h2>
                <div className='carousel owl-carousel'>
                    <div className='card'>
                        <div className='box'>
                            <img src={me} alt={"me"}></img>
                            <div className='text'>내가 바로 문주환</div>
                            <p>asd dlasd sladasldkasldk sadjaksd osdjaksdksiqd sdaokd oqdqosdkqmdksqmd sqodj</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                        <img src={me} alt={"me"}></img>
                        <div className='text'>내가 바로 문주환</div>
                        <p>asd dlasd sladasldkasldk sadjaksd osdjaksdksiqd sdaokd oqdqosdkqmdksqmd sqodj</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                        <img src={me} alt={"me"}></img>
                        <div className='text'>내가 바로 문주환</div>
                        <p>asd dlasd sladasldkasldk sadjaksd osdjaksdksiqd sdaokd oqdqosdkqmdksqmd sqodj</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                        <img src={me} alt={"me"}></img>
                        <div className='text'>내가 바로 문주환</div>
                        <p>asd dlasd sladasldkasldk sadjaksd osdjaksdksiqd sdaokd oqdqosdkqmdksqmd sqodj</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                        <img src={me} alt={"me"}></img>
                        <div className='text'>내가 바로 문주환</div>
                        <p>asd dlasd sladasldkasldk sadjaksd osdjaksdksiqd sdaokd oqdqosdkqmdksqmd sqodj</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='box'>
                        <img src={me} alt={"me"}></img>
                        <div className='text'>내가 바로 문주환</div>
                        <p>asd dlasd sladasldkasldk sadjaksd osdjaksdksiqd sdaokd oqdqosdkqmdksqmd sqodj</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>);
    }
}

export default Teams;


