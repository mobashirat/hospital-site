import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="service-container gx-0 p-4 ">
            <h2>OUR SERVICES</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services?.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;