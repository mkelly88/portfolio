import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import Hero from '../Components/HeroSection';
import About from '../Components/About';
import Project from '../Components/Project';
import Contact from '../Components/Contact';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <Navbar toggle={toggle} /> 
           <Hero />
           <About />
           <Project />
           <Contact />
        </>
    )
}

export default Home;
