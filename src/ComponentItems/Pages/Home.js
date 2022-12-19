import React from 'react';
import '../../App.css';
import HeroSection from '../Header/HeroSection';
import Cards from '../Cards';
import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';


function Home(){
    return(
    <>
        <Navbar />
        <HeroSection />
        <Cards />
        <Footer />
    </>
    );
}

export default Home;