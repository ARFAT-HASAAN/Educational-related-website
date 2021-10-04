import React from 'react';
import { Card, Col, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './course.css'
import { faClock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Courses = (props) => {
    console.log(props.course)

    const { title, instructor, Thumbnail, ratting, price, hourse } = props.course
    return (
        <div>
            <Col>
                <Card className='course-card'>
                    <Card.Img variant="top" src={Thumbnail} />

                    <Card.Body className='p-2'>
                        <Card.Text>{instructor} </Card.Text>
                        <Card.Title className='course-title'>{title}</Card.Title>
                        <Card.Text>
                            <Stack direction="horizontal" gap={5}>
                                {ratting}
                                <h6 className='course-time'><FontAwesomeIcon icon={faClock} />{hourse}</h6>

                            </Stack>
                        </Card.Text>



                    </Card.Body>
                    <div className='btn-container'>
                        <Stack direction="horizontal" gap={5}>
                            <h6 className='course-price'>$ {price}</h6>
                            <button className='card-btn'><FontAwesomeIcon icon={faShoppingCart} />Buy now</button>

                        </Stack>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default Courses;