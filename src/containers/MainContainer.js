import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const MainContainer = () => {

    return (
        <>
            <Router>
                <Navbar />
                <Routes>

                    <Route exact path="/" element={< Home />} />
                    <Route exact path="/projects" element={< Projects />} />

                </Routes>
            </Router>
            <Footer />
        </>
    );
}



export default MainContainer;
