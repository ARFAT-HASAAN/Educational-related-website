import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faLinkedin, faTwitter, faYoutube, } from '@fortawesome/free-brands-svg-icons';
import './about.css'
import { faEnvelope, faLocationArrow, faPhone, faPhoneVolume, faVoicemail } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className='row about'>
            <div className="col-12 col-md-4 colo-lg-4">
                <h2 className='semi-header'>Desi Learning Institude</h2>
                <p>Better than a thousand days of diligent study is one day with a great teacher </p>
                <div class="d-flex justify-content-start social-icon">
                    <span><a href="#"> <FontAwesomeIcon icon={faFacebook} /></a></span>
                    <span><a href="#"><FontAwesomeIcon icon={faYoutube} /> </a></span>
                    <span><a href="#"> <FontAwesomeIcon icon={faTwitter} /></a></span>
                    <span> <a href="#"> <FontAwesomeIcon icon={faLinkedin} /></a></span>

                </div>

            </div>
            <div className="col-12 col-md-4 colo-lg-4">
                <div class="d-flex flex-column bd-highlight mb-3">
                    <h3 className='semi-header'>Explore</h3>

                    <div className='explore'>
                        <p> <a href='#'>Home</a></p>
                        <p> <a href='#'>Course</a></p>
                        <p> <a href='#'>Contact</a></p>
                        <p> <a href='#'>About</a></p>
                    </div>

                </div>

            </div>
            <div className="col-12 col-md-4 colo-lg-4">
                <div className='d-flex flex-column'>

                    <h3 className='semi-header'> Address</h3>
                    <address className='d-flex flex-column'>
                        <p><FontAwesomeIcon icon={faLocationArrow} /> 2750 Quadra Street Golden Victoria Road, New York, USA </p>
                        <p> <FontAwesomeIcon icon={faPhone} /> +1 (123) 456 7890</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> hello@gmail.com</p>
                        <p><FontAwesomeIcon icon={faPhoneVolume} /> +55 785 4578964  </p>
                    </address>

                </div>

            </div>


        </div>
    );
};

export default About;