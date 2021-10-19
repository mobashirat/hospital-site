import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Facilities.css'

const Facilities = () => {
    return (


        <div>
            <div class="row row-cols-1 row-cols-md-4  gx-0 mt-4 facilities">
                <div class="col">
                    <div class="card h-40 service">
                        <p> <i class="fas fa-ambulance fs-4 mt-3">  24 HOURS SERVICE</i></p>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-40 physicians">
                        <p> <i class="fas fa-user-md fs-4 mt-3">YOUR PHYSICIANS</i></p>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-40 appointments">
                        <p>  <i class="fas fa-laptop-medical fs-4 mt-3">ONLINE APPOINTMNET</i></p>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-40 payments">
                        <p><i class="fas fa-mobile-alt fs-4 mt-3">ONLINE PAYMENT</i></p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Facilities;