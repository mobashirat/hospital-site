import React from 'react';
import { Link } from 'react-router-dom';

const TopService = ({ topservice }) => {
    const { id, name, img, describtion } = topservice;
    return (
        <div class="col g-4 ps-2">
            <div class="card h-100 card-bg">
                <img src={img} class="card-img-top w-50 mx-auto mt-5 rounded-3" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{describtion}</p>


                    <Link to={`/service/${id}`}>
                        <button className="btn-dark">Learn more</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default TopService;