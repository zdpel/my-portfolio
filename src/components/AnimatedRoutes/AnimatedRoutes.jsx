import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import JobDetailsPage from '../../pages/JobDetailsPage/JobDetailsPage';

import { AnimatePresence } from 'framer-motion';
import ProjectPage from '../../pages/ProjectPage/ProjectPage';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/projects/:id' element={<ProjectPage/>}/>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;