import React from 'react';
import './Service.css'

const Service = ({ service }) => {

    const { name, img, describtion } = service;
    return (


        <div class="col">
            <div class="card cardes h-100 card-bg">
                <img src={img} class="card-img-top w-50 mx-auto mt-5 rounded-3" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{describtion}</p>
                    <button className="btn-secondary">Learn more</button>
                </div>
            </div>
        </div>


    );
};

export default Service;