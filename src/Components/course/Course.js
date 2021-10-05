import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Stack } from 'react-bootstrap';
import Courses from './Courses';
import './course.css'




const Course = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('./Course.json')
            .then(res => res.json())
            .then(data => setCourses(data)
            )
    }, [])




    return (
        <>
            <div>
                <h1 className='text-center fw-bold fs-1 p-5 '>Choose Your Favorite <br /> Courses</h1>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4 card-container">
                {
                    courses.map(course => <Courses key={course.id} course={course} > </Courses>)
                }


            </Row>


        </>
    );
};

export default Course;