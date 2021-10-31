import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Extra1 from './Extra1/Extra1';
import Extra2 from './Extra2/Extra2';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Extra1></Extra1>
            <Extra2></Extra2>
        </div>
    );
};

export default Home;