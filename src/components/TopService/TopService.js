import React from 'react';

const TopService = ({ topservice }) => {
    const { name, img } = topservice;
    return (
        <div class="col g-4 ps-2">
            <div class="card h-40 card-bg">
                <img src={img} class="card-img-top w-50 mx-auto mt-5 rounded-3" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                    <button className="btn-dark">Learn more</button>
                </div>
            </div>
        </div>

    );
};

export default TopService;