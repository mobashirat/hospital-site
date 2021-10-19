import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">

            <div className="container">

                <div className="row">

                    <div className="footer-col">

                        <ul className="col-lg-3 col-12">
                            <h4>medical</h4>
                            <li>about us</li>
                            <li>our service</li>

                        </ul>
                    </div>
                    <div className="footer-col">

                        <ul>
                            <h4>help</h4>
                            <li>FAQ</li>
                            <li>Bills</li>
                            <li>facilities</li>
                            <li>membership</li>
                        </ul>
                    </div>
                    <div className="footer-col">

                        <ul>
                            <h4>medicines</h4>
                            <li>test reports</li>
                            <li>surgery</li>
                            <li>counsiling</li>
                        </ul>
                    </div>
                    <div className="footer-col social-link">


                        <h5>follow us</h5>
                        <i class="fab fa-facebook-square"></i>

                        <i class="fab fa-twitter-square"></i>
                        <i class="fab fa-linkedin"></i>

                    </div>
                </div>


                <p style={{ color: 'gray' }}><i class="far fa-copyright"></i>All right reserved by child care hospital 2021</p>

            </div>

        </div>
    );
};

export default Footer;