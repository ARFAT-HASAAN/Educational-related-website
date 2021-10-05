import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import instructor from '../../image/yours.png'
import './banner.css';

const Banner = () => {
    return (
        <div className="row banner">

            <div className="col-12 col-md-7 col-lg-6">

                <h1 className='banner-head' >
                    Welcome To The <span>  Desi Learning Institude..<span className='style' >!</span></span>
                </h1>

                <p className='quite'>
                    The capacity to learn is a gift , The ability to learn is a skill, The willingness to learn is a choice .
                </p>
                <button className='btn fs-bold'>
                    <FontAwesomeIcon icon={faUser} />      Join For Free
                </button>

            </div>

            <div className="col-12 col-md-5 col-lg-6">
                <img className='instructor img-fluid' src={instructor} alt="instructor" />

            </div>
        </div>
    );
};

export default Banner;