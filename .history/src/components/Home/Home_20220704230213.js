import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Typewriter from 'typewriter-effect/dist/core';
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
        <section className='about'>
            <h2>Hi, My name is Brittany!</h2>
            <div className='prompt'><p>Full Stack Developer</p></div>
            {/* <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Hello World!')
                    .callFunction(() => {
                        console.log('String typed out!');
                    })
                    .pauseFor(2500)
                    .deleteAll()
                    .callFunction(() => {
                        console.log('All strings were deleted');
                    })
                    .start();
                }}
                /> */}
            <Button variant='contained' href="./BChiu_Resume.pdf" download="./BChiu_Resume.pdf">Download Resume</Button>
            <div className='icons'>
                <Link href="https://github.com/brittanychiucode/" target="_blank" >
                    <GitHubIcon />
                </Link>
                <Link href="mailto:bc.chiu12@gmail.com" target="_blank" >
                    <EmailIcon />
                </Link>                
            </div>
        </section>
        <section className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Full Stack Technologies</h2>
                    <span>Angular, AngularJS, React, HTML, CSS, SpringBoot, NodeJS, MongoDB, PostGres</span>
                </li>
                <li className='item'>
                    <h2>Automation, Orchestration, and Other Services</h2>
                    <span>AWS, Jenkins, Puppet, Git</span>
                </li>
                <li className='item'>
                    <h2>Programming Languages</h2>
                    <span>Python, JavaScript, TypeScript, Java, C++</span>
                </li>
            </ol>
        </section>
    </div>
  )
}
