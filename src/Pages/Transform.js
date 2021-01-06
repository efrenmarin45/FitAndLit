import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/./navbar/Sidebar';

const Transformations = () => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </>
    );
};

export default Transformations;