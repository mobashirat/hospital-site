import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const SingleDetails = () => {
    const { serviceId } = useParams()
    const [serviceDetails, setServiceDetails] = useState([])
    const [singleDetail, setSingleDetail] = useState({})
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))

    }, [])
    useEffect(() => {
        const foundDetails = serviceDetails?.find(service => service.id === serviceId)
        setSingleDetail(foundDetails)
    }, [serviceId, serviceDetails])
    return (
        <div>


            <h2 className="mt-4 mb-3 fw-bold">{singleDetail?.name}</h2>
            <img src={singleDetail?.img} alt="Not found" />
            <p>{singleDetail?.describtion}</p>
            <button className="btn-dark mb-3">more</button>


        </div>
    );
};

export default SingleDetails;