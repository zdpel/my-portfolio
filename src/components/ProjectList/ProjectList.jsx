import React, {useEffect} from 'react';
import './styles.css';
import discordVideo from '../../assets/discord-floss.mp4'
import pingpongImage from '../../assets/pingpong.png'
import compTheoryImage from '../../assets/compTheory.png'
import mentorVideo from '../../assets/mentor.mp4'
import websiteVideo from '../../assets/myweb.mp4'
import androidVideo from '../../assets/android.mp4'
import storybookImage from '../../assets/storybook.jpg'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Masonry from 'react-masonry-css';


const projects = [
    {
        id: 1,
        video: discordVideo,
        title: 'Octave Bot',
        description: 'Music bot for Discord'
    },
    {
        id: 2,
        image: pingpongImage,
        title: 'Mr. Ping',
        description: 'ELO-based ranking and data visualization mobile app for Ping-Pong' 
    },
    {
        id: 3,
        image: compTheoryImage,
        title: 'Turban',
        description: 'Turing Machine Simulator'
    },
    {
        id: 4,
        video: mentorVideo,
        title: 'Mentor Training Site',
        description: 'Full-stack web application for mentor training program'
    },
    {
        id: 5,
        video: websiteVideo,
        title: 'This Website :)',
        description: 'Personal Portfolio Website'
    },
    {
        id: 6,
        video: androidVideo,
        title: 'Android Emulator Automation',
        description: 'Automated tool for testing UI on Android Emulator'
    },
    {
        id: 7,
        image: storybookImage,
        title: 'Automated Screenshot Test Tool',
        description: 'Visual regression testing tool for UI components in Storybook'
    }
];


const ProjectList = () => {
    const navigate = useNavigate();
    const containerRef = React.useRef(null);
    const [columns, setColumns] = React.useState(3);

    const handleProjectClick = (id) => {
        navigate(`/projects/${id}`);
    };

    useEffect(() => {
        const updateColumns = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                console.log(width);
                console.log(columns);
                if (width > 725) {
                    setColumns(3);
                } else if (width > 450) {
                    setColumns(2);
                } else {
                    setColumns(1);
                }
            }
        };

        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    return (
        <div ref={containerRef} className='project-list-container'>
            <Masonry breakpointCols={columns} className='project-list' columnClassName='project-column'>
                {projects.map(project => (
                    <div className="project-item" onClick={() => handleProjectClick(project.id)}>
                        <motion.div layoutId={project.id} className='project-media'>
                            {project.video ? (
                                <motion.video src={project.video} alt={project.title} className="project-video" autoPlay loop muted />
                            ) : (
                                <img src={project.image} alt={project.title} className="project-image" />
                            )}
                        </motion.div>
                        <div className='project-text'>
                            <div className="project-title">{project.title}</div>
                            <p className="project-description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </Masonry>
        </div>
    );
};

export default ProjectList;