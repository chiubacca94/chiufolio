import React from 'react';
import InstagramIcon  from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Link href="https://www.instagram.com/bchiuable/" target="_blank" >
                <InstagramIcon />
            </Link>
            <Link href="https://twitter.com/brittanychiu" target="_blank" >
                <TwitterIcon />
            </Link>
            <Link href="https://www.facebook.com/brittany.chiu94"  target="_blank" >
                <FacebookIcon />
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
