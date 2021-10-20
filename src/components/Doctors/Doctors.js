import React from 'react';
import './Doctors.css'





const Doctors = () => {
    return (
        <div className="header">
            <h2>Doctors List</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 p-2">
                <div class="col">
                    <div class="card shadow-md">
                        <img src="https://i.ibb.co/hBRxpv9/doc5.jpg" class="card-img-top w-50 mx-auto mt-3" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Dr.Md.Selim Khan</h5>
                            <p class="card-text">MBBS,FCPC(Medicine)</p>
                            <p class="card-text">Senior Consultant</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://i.ibb.co/FVwyZSs/doc6.png" class="card-img-top w-50 mx-auto mt-3" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Dr.Feroza Meher</h5>
                            <p class="card-text">MBBS(CMC),BCS</p>
                            <p class="card-text">Assistant Professor</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-h-100">
                        <img src="https://i.ibb.co/QfPRfw6/doc1.png" class="card-img-top w-50 mx-auto mt-3" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">DR.Shahanra Alam</h5>
                            <p class="card-text">Assistent Professor</p>
                            <p class="card-text">MBBS,MC(Gynee)</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://i.ibb.co/yV0Jj5z/doc2.png" class="card-img-top w-50 mx-auto mt-3" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Dr.Sajid</h5>
                            <p class="card-text">MBBS,MC(Eye specialist)</p>
                            <p class="card-text">Senior Assistant</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://i.ibb.co/nC1kLqS/doc3.png" class="card-img-top w-50 mx-auto mt-3" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Dr.Payel</h5>
                            <p class="card-text">MBBS,MC(Eye specialist)</p>
                            <p class="card-text">Assistant Professor</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://i.ibb.co/Brd4dBn/doc4.png" class="card-img-top w-50 mx-auto mt-3" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Dr.Sneha</h5>
                            <p class="card-text">MBBS,MC(Gynee)</p>
                            <p class="card-text">Assistant Professor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;