import React from 'react';
import Header from "../components/header";
import useSticky from '../customHooks/useSticky';
import Navbar from "../components/navbar";
import TeamPlaybook from '../components/teamPlaybook';
import Sponsor from '../components/sponsor';
import Carousel from '../components/carousel';
import HomeFeatures, { Planing } from '../components/homeFeatures';
import Footer from '../components/footer';
// import { Consumer } from '../contextApi';


export default function Home() {
    const { isSticky, element } = useSticky();
    return (
        <div>
            <Navbar sticky={isSticky} element={element} />
            <Header />
            <HomeFeatures />
            <Carousel />
            <TeamPlaybook />
            <Sponsor />
            <Planing />
            <Footer />
        </div>
    )
}

