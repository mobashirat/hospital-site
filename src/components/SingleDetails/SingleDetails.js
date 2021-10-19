import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Service from '../Service/Service';


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


            <h2>{singleDetail?.name}</h2>
            <img src={singleDetail?.img} alt="Not found" />


        </div>
    );
};

export default SingleDetails;