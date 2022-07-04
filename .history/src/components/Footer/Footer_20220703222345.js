import React from 'react';
import { InstagramIcon, TwitterIcon, FacebookIcon, LinkedInIcon } from '@material-ui/icons';
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon />
            <TwitterIcon />
            <FacebookIcon />
            <LinkedInIcon />
        </div>
        <p>&copy; 2022 brittanychiu.com</p>
    </div>
  )
}
