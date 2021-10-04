import React from 'react';
import gif from '../../image/notfound.gif'
import './notfound.css'

const Notfound = () => {
    return (
        <div className='notfound'>
            <button className='back-btn'>back</button>
            <button className='home-btn'>Home</button>

            {/* <img className='img-fluid' src={gif} alt="" /> */}
        </div>
    );
};

export default Notfound;