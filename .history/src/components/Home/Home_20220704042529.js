import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'

import './Home.css'

export default function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, My name is Brittany!</h2>
            <div className='prompt'><p> A developer!</p></div>
            <GitHubIcon />
            <EmailIcon />
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Full Stack Technologies</h2>
                    <span>Angular, AngularJS, React, HTML, CSS, SpringBoot, NodeJS, MongoDB, PostGres</span>
                </li>vvvv
                <li className='item'>
                    <h2>Automation, Orchestration, and Other Services</h2>
                    <span>AWS, Jenkins, Puppet, Git</span>
                </li>
                <li className='item'>
                    <h2>Programming Languages</h2>
                    <span>Python, JavaScript, TypeScript, Java, C++</span>
                </li>
            </ol>
        </div>
    </div>
  )
}