import React from 'react';
import './Service.css'

const Service = ({ service }) => {

    const { name, img } = service;
    return (


        <div class="col">
            <div class="card h-40 card-bg">
                <img src={img} class="card-img-top w-50 mx-auto mt-5 rounded-3" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        </div>


    );
};

export default Service;