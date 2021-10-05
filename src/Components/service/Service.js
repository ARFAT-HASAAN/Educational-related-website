import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Col, Stack } from 'react-bootstrap';
import './service.css'
import { faClock, faShoppingBasket, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import Rating from 'react-rating';

const Service = (props) => {



    const { title, instructor, Thumbnail, ratting, price, rattingCount, hourse } = props.serv
    return (
        <div>
            <Col>
                <Card className='course-card'>
                    <Card.Img variant="top" src={Thumbnail} />

                    <Card.Body className='p-2'>
                        <Card.Text>{instructor} </Card.Text>
                        <Card.Title className='course-title' >{title}</Card.Title>
                        <Card.Text>
                            <Stack className='d-flex justify-content-between align-items-center' direction="horizontal" gap={5}>
                                <Rating className='ratting-box'
                                    initialRating={ratting}
                                    emptySymbol="fa fa-star-o fa-1x icon-color"
                                    fullSymbol="fa fa-star fa-1x icon-color"

                                /><span className='count' >({rattingCount})</span>
                                <h6 className='course-time' ><FontAwesomeIcon icon={faClock} /> {hourse}</h6>

                            </Stack>
                        </Card.Text>



                    </Card.Body>
                    <div className='btn-container'>
                        <Stack className='d-flex justify-content-between align-items-center' direction="horizontal" gap={5}>
                            <h6 className='course-price' >${price}</h6>
                            <button className='card-btn'><FontAwesomeIcon icon={faShoppingCart} />Buy now</button>

                        </Stack>
                    </div>

                </Card>
            </Col>
        </div>

    );
};

export default Service;