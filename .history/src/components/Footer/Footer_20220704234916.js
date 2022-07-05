import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Link href="https://github.com/brittanychiucode/" target="_blank" >
                    <GitHubIcon />
            </Link>
            {/* className={classes.link} */}
            <Link href="https://www.linkedin.com/in/brittanychiu/"  target="_blank" >
                <LinkedInIcon />
            </Link>
        </div>
        <p>&copy; 2022 brittanychiu.com</p>
    </div>
  )
}
