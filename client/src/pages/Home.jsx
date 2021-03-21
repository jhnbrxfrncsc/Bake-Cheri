import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Delivery from '../components/Delivery/Delivery';
import CustomOrders from '../components/CustomOrders/CustomOrders';
import BestSellers from '../components/BestSellers/BestSellers';
import Menu from '../components/Menu/Menu';
import Socials from '../components/Socials/Socials';
import Contact from '../components/Contact/Contact';


const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Delivery/>
            <CustomOrders />
            <BestSellers />
            <Menu />
            <Socials />
            <Contact />
        </>
    )
}

export default Home;
