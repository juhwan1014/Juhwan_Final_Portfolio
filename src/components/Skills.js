
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';



class Skills extends Component {
    state = {}
    render() {
        return (<div className="skills" >
            <div className="max-width">
            <h2 className="title">
            {/* <Fade bottom cascade>My skills</Fade> */}My Skills
            </h2>
             
            <div className="skills-content">
         
                <div className="column left">
                    <div className="text">
                        My creative skills and experiences.</div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione error est recusandae consequatur, iusto illum deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate recusandae laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod.</p>
                    <a href="#">Read more</a>
                </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div className="line html">
                        </div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
                            <span>70%</span>
                        </div>
                        <div className="line css">
                        </div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>50%</span>
                        </div> 
                        <div className="line js">
                        </div>
                    </div>       
                    <div className="bars">
                        <div className="info">
                            <span>Java</span>
                            <span>70%</span>
                        </div>
                        <div className="line java">
                        </div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>SQL</span>
                            <span>40%</span>
                        </div>     
                        <div className="line sql">
                        </div>  
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>React</span>
                            <span>60%</span>
                        </div>
                        <div className="line react">
                        </div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Python/C#/.net</span>
                            <span>30%</span>
                        </div>
                        <div className="line etc">
                        </div>
                    </div>
                    </div>
                    
                </div>
          
            </div>
        </div>
        );
    }
}

export default Skills;