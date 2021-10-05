import React from 'react';

import Service from '../../Components/service/Service'
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';



const Displyservice = () => {

    const history = useHistory()

    const viewCourse = () => {
        history.push('/course')
    }

    const [services, setServices] = useState([])

    useEffect(() => [
        fetch('/Course.json')
            .then(res => res.json())
            .then(data => setServices(data))
    ], [])

    const service = services.slice(0, 4);
    console.log(service);


    return (
        <div>
            <h1 className='text-center fw-bold fs-1 p-5 '>Popular Project  Management <br /> Courses</h1>

            <Row xs={1} md={2} lg={4} className="g-4 card-container">
                {
                    service.map(srvc => <Service key={srvc.id} serv={srvc} ></Service>)
                }
            </Row>

            <div className='text-center p-5'>
                <button onClick={viewCourse} className='btn fw-bold px-3'>View All Courses</button>
            </div>

        </div>
    );
};

export default Displyservice;