import React from 'react';
import img1 from '../../images/choose2.png'
import img2 from '../../images/choose1.jpg'
import img3 from '../../images/choose1.png'
import './Qualification.css'

const Qualifications = () => {
    return (
        <div className="quality">
            <h2 className="text-success mt-4 pt-4">Why Choose Us!!!</h2>
            <hr className="mx-5 text-danger fw-bold" />
            <div class="row row-cols-1 row-cols-md-3 g-3 mb-3">
                <div class="col">
                    <div class="card cardes  h-100">
                        <img src={img1} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fs-3">Best Equipments</h5>
                            <p class="card-text">We have latest equipment service.All doctors are well trained of this medical equipments.All the equipments of ACE Hospital exported from China,USA,Singapore.We also make sure to update our equipments in a year and repair it by specialists.</p>

                            <button className="btn-success">more</button>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card cardes h-100">
                        <img src={img2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fs-3">Emergency Service</h5>
                            <p class="card-text">For appointment, emergency, billing and information: 12696
                                Land phone: +88 02 8747870
                                Mobile no.: +88 6423748967
                                24-hour emergency and ambulance service: +88 7634728
                                Email: info@acehospital.com Facebook: https://www.facebook.com/acehospital.</p>

                            <button className="btn-success">more</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card cardes h-100">
                        <img src={img3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fs-3">Dedicated Doctors</h5>
                            <p class="card-text">ACE Hospital aims to provide the highest possible level of care by the qualified consultants from India, Singapore, USA, UK and quality hospitals in the Middle East. Even the nurses and technicians are also proficiently trained from Bangladesh, Australia, UK, India and The Philippines.</p>

                            <button className="btn-success">more</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Qualifications;