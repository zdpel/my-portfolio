import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import {motion} from 'framer-motion';

const TimelineEntry = ({ title, id, time, description, position, image }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail/${id}`);
    };
    return (
        <div className={`timeline-entry ${position}`} onClick={handleClick}>
            <div className="timeline-content">
                <motion.div className='timeline-entry-text' layoutId={id}>
                    <h3>{title}</h3>
                    <p>{time}</p>
                </motion.div>
                <p>{description}</p>
                <div className='timeline-entry-image'>
                    {image && <img src={image} className="timeline-image" />}
                </div>
            </div>
        </div>
    );
};

export default TimelineEntry;