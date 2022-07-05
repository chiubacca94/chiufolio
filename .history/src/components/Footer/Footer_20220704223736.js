import React from 'react';
import InstagramIcon  from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Link href="http://www.google.com" className={classes.link} target="_blank" >
                <InstagramIcon />
            </Link>
            <Link href="http://www.google.com" className={classes.link} target="_blank" >
                <TwitterIcon />
            </Link>
            <Link href="http://www.google.com" className={classes.link} target="_blank" >
                <FacebookIcon />
            </Link>
            <Link href="http://www.google.com" className={classes.link} target="_blank" >
                <LinkedInIcon />
            </Link>
        </div>
        <p>&copy; 2022 brittanychiu.com</p>
    </div>
  )
}
