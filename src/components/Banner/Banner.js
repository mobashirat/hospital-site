import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import slide1 from '../../images/doctorslide2 (1).png'
import slide2 from '../../images/doctorslide2.png'
import slide3 from '../../images/doctorslide3.png'

const Banner = () => {
    return (
        <div className="img-width">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="mb-5 bg-effect">
                        <h3>We care about your child smile</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="bg-effect">
                        <h3>Our Researches</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="bg-effect">
                        <h3>We are always here for you</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;