import React from 'react';
import { useParams } from 'react-router-dom';
import chickenPic from './pics/reginaChicken.jpg'

const About = () => {
    return (
            <body className='about-body'>
                <div className='image-container-about'>
                    
                    <div className='bio-container-about'>
                        <img src={chickenPic} className='piano-pic' alt='my hands on a piano keyboard close-up'></img>
                        <br></br>
                        <br></br>
                        <h1 className='about-header'>ABOUT</h1>
                        <p className="about-paragraph">
                        I am a first-generation data wrangler with a MSc and a background in applied anthropology, data analytics and mixed-method research. My experience aims to uncover powerful stories with actionable insights fueled by data.
                        </p>
                    </div>
                        
                        <h2>LANGUAGES:</h2>
                

                    <ul className="skills-list">
                        <li>&#10095; Python</li>
                            <li>&#10095;Pandas</li>
                            <li>&#10095;NumPy</li>
                            <li>&#10095;Seaborn</li> 
                            <li>&#10095;MatPlotLib</li> 
                            <li>&#10095;SciKit</li>
                            <li>&#10095;SciPy</li>
                        <li>&#10095; R</li>
                        <li>&#10095; Sequel</li>
         
                    </ul>
                </div>
            </body>
    );
};

export default About;