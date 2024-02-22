import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Typewriter from 'typewriter-effect';
import './Home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
      }
    
    render() {
        return (
            <div className='home scroller'>
                <section className='about'>
                    <h2>Hi, My name is Brittany!</h2>
                    <div className='prompt'> I am a
                    <Typewriter
                        options={{
                            strings: ['Front-End Developer', 'Back-End Developer', 'Full Stack Developer', 'Software Engineer', 'DevOps Engineer'],
                            autoStart: true,
                            loop: true,
                            delay: 90
                        }}
                        />
                    </div>
                    <Button variant='contained' href="https://github.com/brittanychiucode/chiufolio/raw/master/public/BChiu_Resume.pdf" target="_blank" download>Download Resume</Button>
                    
                    
                </section>
                <section className='skills'>
                    <h1>Skills</h1>
                    <ol className='list'>
                        <li className='item'>
                            <h2 className='item-title'>Full Stack</h2>
                            <span>Angular, AngularJS, React, HTML, CSS, SpringBoot, NodeJS, MongoDB, PostGres</span>
                        </li>
                        <li className='item'>
                            <h2 className='item-title'>Automation, Orchestration, etc</h2>
                            <span>AWS, Docker, Kubernetes, Jenkins, Puppet, Git</span>
                        </li>
                        <li className='item'>
                            <h2 className='item-title'>Programming Languages</h2>
                            <span>Python, JavaScript, TypeScript, Java, C++</span>
                        </li>
                    </ol>
                </section>
            </div>
        )
    }
}
