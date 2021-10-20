import React from 'react';
import './Doctors.css'





const Doctors = () => {
    return (
        <div className="header">
            <h4>Doctors List</h4>
            <div class="row row-cols-1 row-cols-md-3 g-4 p-2">
                <div class="col">
                    <div class="card shadow-md">
                        <img src="https://i.ibb.co/hBRxpv9/doc5.jpg" class="card-img-top w-50 mx-auto" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://i.ibb.co/FVwyZSs/doc6.png" class="card-img-top w-50 mx-auto" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card card-h-100">
                        <img src="https://i.ibb.co/QfPRfw6/doc1.png" class="card-img-top w-50 mx-auto" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://i.ibb.co/yV0Jj5z/doc2.png" class="card-img-top w-50 mx-auto" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://i.ibb.co/nC1kLqS/doc3.png" class="card-img-top w-50 mx-auto" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://i.ibb.co/Brd4dBn/doc4.png" class="card-img-top w-50 mx-auto" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;