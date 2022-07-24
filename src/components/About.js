import React from 'react';
import { useParams } from 'react-router-dom';
import chickenPic from './pics/reginaChicken.jpg'

const About = () => {
    return (
        <div>
            <body>
                <div className='image-container-about'>
                    
                    <div className='bio-container-about'>
                        <img src={chickenPic} className='piano-pic' alt='my hands on a piano keyboard close-up'></img>
                        <br></br>
                        <br></br>
                        <h1 className='about-header'>ABOUT</h1>
                        <p className="about-paragraph">I began my career as a freelance music producer. I had the privilege of <a className='about-link' href="https://open.spotify.com/track/66zE85sYeTb6cmVdZbJtK2?si=66b96654352b4f22">recording at Spotify's recording studio</a> in Los Angeles, <a className='about-link' href="https://www.youtube.com/watch?v=CcxzkM5i8Ns">developing partnerships </a>with Universal Music Gcroup, Bluenote Records, and <a className='about-link' href="https://www.ableton.com/en/blog/studies-sound-arbour-lo-fi-beats-and-musical-exploration/">Ableton</a>, and making music for every major <a className='about-link' href="https://www.youtube.com/watch?v=45zum9ZXiDY">"24/7 lofi beats to study to"</a> live stream out there.
                        <br></br>
                        <br></br>
                        Now, my curiosity has led me in the direction of Software Engineering. In June I enrolled in General Assembly's Software Engineering Immersive and I'll be graduating with over 500 hours of engineering experience in August 2022.</p>
                        
                        <h2>TECHNOLOGIES:</h2>

                    
                        
                    
                    </div>
                

                    <ul className="skills-list">
                        <li>&#10095; HTML5</li>
                        <li>&#10095; CSS3</li>
                        <li>&#10095; JavaScript</li>
                        <li>&#10095; React.js</li>
                        <li>&#10095; Node.js</li>
                        <li>&#10095; Express</li>
                        <li>&#10095; MongoDB</li>
                        <li>&#10095; Mongoose</li>
                        <li>&#10095; Python</li>
                        <li>&#10095; Django</li>
                        <li>&#10095; Postgres</li>
                        <li>&#10095; AWS</li>
                        <li>&#10095; S3</li>
                    </ul>
                </div>
            </body>
        </div>
    );
};

export default About;