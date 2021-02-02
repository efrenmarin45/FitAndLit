import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/./navbar/Sidebar';
import HeroSection from '../components/Hero';
import AboutSection from '../components/AboutSection';
import SolutionsSection from '../components/SolutionsSection';
import TransformationSection from '../components/Transformation';
import Footer from '../components/Footer';

const Home = () => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <AboutSection />
            <SolutionsSection />
            <TransformationSection />
            <Footer />
        </>
    );
};

export default Home;