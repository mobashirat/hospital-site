import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

import slide2 from '../../images/doctorslide2.png'
import slide3 from '../../images/doctorslide3.png'

const Banner = () => {
    return (
        <div className="img-width">
            <Carousel>

                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="bg-effect mb-5">
                        <h3>ACE HOSPITAL</h3>
                        <p>Our main goal to give you the best service.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="bg-effect mb-5">
                        <h3>We are always here for you</h3>
                        <p>To know more about us Please visit our website.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;