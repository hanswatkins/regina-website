import React from 'react';
import reginaPic2 from './pics/reginaPic-2.jpg';
import instagram from './pics/instagram.png'
import linkedin from './pics/linkedin.png'
import mailbox from './pics/mailbox.png'
import payphone from './pics/payphone.png'
import iphone from './pics/smartphone.png'

const Home = () => {
    return (
            <div className='container'>
                <body>
                    <div className='image-container'>
                        <img src={reginaPic2} className="portrait" alt="portrait standing in front of a sunset" />
                        <div className='bio-container'>
                            <h1 className='title'>REGINA DORIA , MSc</h1>
                            
                            <h2 className='data-wrangler-title'>Data Wrangler</h2>


    <div className='footer-list'>
        <ul className='ul-footer'>
            <li className="footer-links"><a href="tel:+1-360-961-7947"><img src={iphone} alt='' className='link-logo'></img></a></li>
            <li className="footer-links"><a href="mailto:reginajdoria@gmail.com"><img src={mailbox} className='link-logo' alt=''></img></a></li>
            <li className="footer-links"><a href="https://www.linkedin.com/in/hanswatkins"><img className="link-logo" src={linkedin} alt='linkedin logo'></img></a></li>
            <li className="footer-links"><a href="https://www.instagram.com/prod_arbour"><img className="link-logo" src={instagram} alt='instagram logo'></img></a></li>
        </ul>
    </div>

                            
                        </div>
                    </div>
                </body>
            </div>
    );
};

export default Home;