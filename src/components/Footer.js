import React from 'react';
import instagram from './pics/instagram.png'
import linkedin from './pics/linkedin.png'
import mailbox from './pics/mailbox.png'
import payphone from './pics/payphone.png'

const Footer = () => {
    return (
        <div>
        <ul className='footer-list'>
            <li className="footer-links"><a href="tel:+1-360-961-7947"><img src={payphone} alt='' className='link-logo' width='40'></img></a></li>
            <li className="footer-links"><a href="mailto:reginajdoria@gmail.com"><img src={mailbox} className='link-logo' width='40' alt=''></img></a></li>
            <li className="footer-links"><a href="https://www.linkedin.com/in/hanswatkins"><img className="link-logo" src={linkedin} width='40 'alt='linkedin logo'></img></a></li>
            <li className="footer-links"><a href="https://www.instagram.com/prod_arbour"><img className="link-logo" width="40"src={instagram} alt='instagram logo'></img></a></li>
        </ul>
    </div>
    );
};

export default Footer;