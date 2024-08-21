import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './styles.css';
import { motion } from 'framer-motion';
import '../../animations/animations.css';

const JobDetailsPage = ({id, title, time}) => {
    const location = useLocation();

    return (
        <div className="detail-page">
            <motion.div layoutId={id} className="animated-title">
                <h3>{title}</h3>
                <p>{time}</p>
            </motion.div>
        </div>
    );
};

export default JobDetailsPage;