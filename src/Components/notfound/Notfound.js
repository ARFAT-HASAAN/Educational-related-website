import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router';
import './notfound.css'
import { faBackward, faHome } from '@fortawesome/free-solid-svg-icons';





const Notfound = () => {

    let history = useHistory()

    const backhandler = () => {
        history.push("/home")

    }

    return (
        <div className='container-fluid notfound'>

            <button onClick={backhandler} className='back-btn bg-light'> <FontAwesomeIcon icon={faBackward} /> Back</button>

            <button onClick={backhandler} className='home-btn bg-primary'> <FontAwesomeIcon icon={faHome} /> Home</button>


        </div>
    );
};

export default Notfound;