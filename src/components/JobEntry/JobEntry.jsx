import React from 'react';
import { motion } from 'framer-motion';
import './styles.css';


const JobEntry = ({time, title, company, description}) => {
    return (
        <motion.div             
            className="job-entry-card"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ background: "rgba(64, 31, 80, 0.1)" }}
            whileInView={{ opacity: 1, x: 0, transition: { type: "spring", bounce: 0.1, duration: 1.2} }}
            viewport={{ once: true }}
            whileHover={{
                background: [
                    "linear-gradient(90deg, rgba(255,0,150,1) 0%, rgba(0,204,255,1) 100%)",
                    "linear-gradient(90deg, rgba(0,204,255,1) 0%, rgba(255,0,150,1) 100%)"
                ],
                color: "black",
                transition: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror"
                }
            }}
        >
            <div className='job-text'>
                <div className='job-text-header'>
                    <div className='job-title'>{title}</div>
                    <div className='job-time'>{time}</div>
                </div>
                <div className='job-company'>{company}</div>
                <div className='job-description'>{description}</div>
            </div>
        </motion.div>
    );
};

export default JobEntry;