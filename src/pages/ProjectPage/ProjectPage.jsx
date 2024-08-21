import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import discordVideo from '../../assets/discord-floss.mp4'
import pingpongImage from '../../assets/pingpong.png'
import compTheoryImage from '../../assets/compTheory.png'
import mentorVideo from '../../assets/mentor.mp4'
import websiteVideo from '../../assets/myweb.mp4'
import androidVideo from '../../assets/android.mp4'
import storybookImage from '../../assets/storybook.jpg'
import { useNavigate } from 'react-router-dom';
import './styles.css';

const projects = [
    {
        id: 1,
        video: discordVideo,
        title: 'Octave Bot',
        description: 'Music bot for Discord',
        summary: 'Octave Bot is a music bot for Discord that I developed in my free time. It is written in Python using the Discord Python library and the Youtube API. It has the basic features such as join voice channel, start and pause functionality, and song queuing. It aslo has variety of other features such as volume control, queue management, and playlist support.',
        purpose: "My friends couldn't find a music bot that had all the features they wanted (and one that wasn't getting banned) so I decided to make my own. I wanted to learn more about the Discord API and Youtube API, so I decided to make a music bot.",
        length: '1 week',
        technologies: "Python, Discord API, Youtube API"
    },
    {
        id: 2,
        image: pingpongImage,
        title: 'Mr. Ping',
        description: 'ELO-based ranking and data visualization mobile app for Ping-Pong',
        summary: 'Mr. Ping is a mobile app that I developed for tracking and visualizing ping-pong game data. It uses an ELO-based ranking system to rank players and provides a variety of visualized data metrics for each player track their progress.',
        purpose: 'My residence hall at college wanted a way to track ping-pong games and rank players to determine who was actually the best. I developed this app to provide a fun and competitive aspect to the ping-pong table in our residence hall.',
        length: 'Roughly 30 hours of work',
        technologies: 'Dart, Flutter, SQLite, Android Studio'
    },
    {
        id: 3,
        image: compTheoryImage,
        title: 'Turban',
        description: 'Turing Machine Simulator',
        summary: 'Turban is a Turing Machine simulator that I developed for my Computer Theory class. It allows users to enter an encoding of a Turing Machine. It then simulates the Turing Machine on a given input and visualizes the head and tape movement on inputs then provides output.',
        purpose: "My Computer Theory professor said he couldn't find a good Turing Machine simulator and visualizer, so I whipped one up real quick",
        length: '2 weeks',
        technologies: 'Java, JavaFX'
    },
    {
        id: 4,
        video: mentorVideo,
        title: 'Mentor Training Site',
        description: 'Full-stack web application for mentor training program',
        summary: 'I developed a full-stack web application for a mentor training program at a non-profit organization. The site acts as a hub for mentor training resources and provides a way for mentors to access training materials and track their progress. I created the backend and a secure login for the site to ensure privacy.',
        purpose: 'The organization needed a way to provide mentor training resources to their mentors while also protecting the privacy and data of these mentors.',
        length: '1 month',
        technologies: 'React, Javascript, HTML, CSS, Node.js, PHP, PHPmyAdmin, SQL'
    },
    {
        id: 5,
        video: websiteVideo,
        title: 'This Website :)',
        description: 'Personal Portfolio Website',
        summary: 'This website is my personal portfolio website that I developed to showcase my projects and skills. I wanted to create a clean and professional website that would allow me to display my work and provide a way for people to contact me.',
        purpose: 'To show my personal and work projects in a clean and professional way but mostly because I wanted to further grow my skills in web development and web design.',
        length: '1 week',
        technologies: 'React, Javascript, HTML, CSS, Framer Motion'
    },
    {
        id: 6,
        video: androidVideo,
        title: 'Android Emulator Automation',
        description: 'Automated tool for testing UI on Android Emulator',
        summary: 'I developed an automated tool for setting up a testing environment for React UI components on an Android Emulator. The tool allows my team of developers to quickly and easily test their UI components on an Android Emulator without having to manually set up the environment each time.',
        purpose: 'My team at HP had no way to test React.js web components in a mobile environment. So, I developed this tool to allow my develpoment team to quickly and easily test our components on an Android Emulator.',
        length: '2 months',
        technologies: 'React, PowerShell Scripting, Android Studio Emulators, Node.js',
        company: 'HP'
    },
    {
        id: 7,
        image: storybookImage,
        title: 'Automated Screenshot Test Tool',
        description: 'Visual regression testing tool for UI components in Storybook',
        summary: 'I developed an automated screenshot test tool for testing UI components in Storybook using Puppeteer for Web Scraping and Jest for automated testing. The tool provides visual regression testing for our UI component library by comparing screenshots of components before and after changes. It allows us to quickly identify any visual bugs or changes in our components.',
        purpose: 'My team at HP needed a way to quickly and easily test our UI components for visual bugs and changes. I implemented a method that could add another layer of testing to ensure visual consistency.',
        length: '1 months',
        technologies: 'Puppeteer, Jest, React, Storybook',
        company: 'HP'
    }
];

const ProjectPage = () => {
    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    };

    <button className='project-page-back-button' onClick={handleBackButtonClick}>Go Back</button>

    const { id } = useParams();
    const project = projects.find(project => project.id === parseInt(id));
    console.log(id);
    return (
        <motion.div className='project-page' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div className='project-page-start-content'>
                <div className='project-page-title'>{project.title}</div>
                <div className='project-page-description'>
                    {project.description}
                </div>
                <motion.div className='project-media' layoutId={project.id}>
                    {project.video ? (
                        <motion.video src={project.video} alt={project.title} className="project-video" autoPlay loop muted />
                    ) : (
                        <img src={project.image} alt={project.title} className="project-image" />
                    )}
                </motion.div>
            </div>
            <div className='project-page-scroll-content'>
                {project.company && (
                    <div className='project-company'>
                        <div className='project-company-title'>COMPANY</div>
                        <p>{project.company}</p>
                    </div>
                )}
                <div className='project-summary'>
                    <div className='project-summary-title'>SUMMARY</div>
                    <p>{project.summary}</p>
                </div>
                <div className='project-purpose'>
                    <div className='project-purpose-title'>PURPOSE</div>
                    <p>{project.purpose}</p>
                </div>
                <div className='project-length'>
                    <div className='project-length-title'>LENGTH</div>
                    <p>{project.length}</p>
                </div>
                <div className='project-technologies'>
                    <div className='project-technologies-title'>TECHNOLOGIES</div>
                    <p>{project.technologies}</p>
                </div>
            </div>
            <button className='project-page-back-button' onClick={handleBackButtonClick}>Go Back</button>

        </motion.div>
    );
};

export default ProjectPage;