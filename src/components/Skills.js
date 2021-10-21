
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';



class Skills extends Component {
    state = {}
    render() {
        return (<div class="skills" id="skills">
            {/* <div class="max-width"> */}
            <h2 class="title">
            <Fade bottom cascade>My skills</Fade></h2>
           
            <div class="skills-content">
         
                <div class="column left">
                    <div class="text">
                        My creative skills and experiences.</div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione error est recusandae consequatur, iusto illum deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate recusandae laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod.</p>
                    <a href="#">Read more</a>
                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div class="line html">
                        </div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>70%</span>
                        </div>
                        <div class="line css">
                        </div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span>50%</span>
                        </div> 
                        <div class="line js">
                        </div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>Java</span>
                            <span>70%</span>
                        </div>
                        <div class="line java">
                        </div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>SQL</span>
                            <span>40%</span>
                        </div>
                        <div class="line sql">
                        </div>  
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>React</span>
                            <span>60%</span>
                        </div>
                        <div class="line react">
                        </div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>Python/C#/.net</span>
                            <span>30%</span>
                        </div>
                        <div class="line etc">
                        </div>
                    </div>
                    </div>
                    
                </div>
          
            {/* </div> */}
        </div>
        );
    }
}

export default Skills;