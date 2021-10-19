import React from 'react';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import Footer from '../Footer/Footer';
import Qualifications from '../Qualifications/Qualifications';
import Services from '../Services/Services';
import TopServices from '../TopServices/TopServices';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Facilities></Facilities>

            <TopServices></TopServices>
            <Qualifications></Qualifications>

            <Footer></Footer>
        </div>
    );
};

export default Home;