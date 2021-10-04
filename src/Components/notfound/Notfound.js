import React from 'react';
import { useHistory } from 'react-router';
import gif from '../../image/notfound.gif'
import './notfound.css'



const Notfound = () => {

    // const history = useHistory()

    // const backhadler = () => {
    //     history.push('/home')

    // }

    return (
        <div className='notfound'>


            <button className='back-btn'>back</button>
            <button className='home-btn'>Home</button>


        </div>
    );
};

export default Notfound;