import React, { useEffect, useState, useRef } from 'react';
import './styles.css';
import { motion , useScroll, scroll, useSpring } from 'framer-motion';
import ProjectList from '../../components/ProjectList/ProjectList';
import ConnectBar from '../../components/ConnectBar/ConnectBar';
import JobEntry from '../../components/JobEntry/JobEntry';

const HomePage = () => {
    const { scrollYProgress } = useScroll();
    const [currentSection, setCurrentSection] = useState('about');

    const aboutRef = useRef(null);
    const careerRef = useRef(null);
    const projectsRef = useRef(null);

    scroll((newProgress) => {
        if (newProgress >= 0.7 && currentSection !== 'projects') {
            setCurrentSection('projects');
        } else if (newProgress >= 0.25 && newProgress < 0.7 && currentSection !== 'career') {
            setCurrentSection('career');
        } else if (newProgress < 0.25 && currentSection !== 'about') {
            setCurrentSection('about');
        }
    });

    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.div className='home-page' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div className='home-page-start-content'>
                <div className='home-page-name'>Zachary Pelham</div>
                <div className='home-page-job'>Software Engineer</div>
                <div className='home-page-progress-container'>
                    <div className='home-page-progress-bar-background'>
                        <motion.div
                            className='home-page-progress-bar'
                            style={{ scaleY: scrollYProgress}}
                        />
                    </div>
                    <div className='home-page-progress-bar-nav'>
                            <button className={`nav${currentSection === 'about' ? '-current' : ''}`} onClick={() => scrollToSection(aboutRef)}>About</button>
                            <button className={`nav${currentSection === 'career' ? '-current' : ''}`} onClick={() => scrollToSection(careerRef)}>Career</button>
                            <button className={`nav${currentSection === 'projects' ? '-current' : ''}`} onClick={() => scrollToSection(projectsRef)}>Projects</button>
                    </div>
                </div>
                <div className='connect-bar'>
                    <ConnectBar />
                </div>
            </div>
            <div className='home-page-scroll-content'>
                <div className='home-page-text-content'>
                        <div className='home-page-aboutme'>
                            <div className='home-page-aboutme-title' ref={aboutRef}>ABOUT</div>
                            <div className='home-page-aboutme-content'>
                                <p>Hello! I’m a passionate <span>Computer Science</span> student at LeTourneau University, on track to graduate in May 2025. I’ve had the privilege of interning at HP, where I delved into <span>UI</span> and <span>DevOps</span> development, gaining invaluable insights into the world of large-scale technology solutions.</p>
                                <p>I’ve embarked on a variety of side projects that showcase my diverse interests. From <span>Machine Learning</span> and <span>Mobile App Development</span> to <span>Web Development</span> and <span>Data Visualization</span>. My work spans a range of languages and tools, including Python, C++, Java, JavaScript/TypeScript, HTML, CSS, Dart, and PowerShell.</p>
                                <p>Looking ahead, I’m excited to further expand my expertise by pursuing a <span>Master’s Degree in Cyber Security</span> after graduation.</p>
                            </div>
                        </div>
                    </div>
                <div className='home-page-career'>
                    <div className='home-page-career-title' ref={careerRef}>CAREER</div>
                    <div className='job-entry-list'>
                        <JobEntry time="Summer 2024" title="Software Engineer Intern" company="HP" description="Created a too for automated setup of testing environment for React UI Components on an Android Emulator. Implemented many high-priority bug fixes on UI component library. Collaborated with design team to create custom components."/>
                        <JobEntry time="Winter 2023" title="Web Development Contractor" company="Life Bridge Mentoring" description="Created a full-stack website which acts as a hub for mentor training resources for a non-profit organization. Worked with head of organization to understand needs then implemented solution."/>
                        <JobEntry time="Summer 2023" title="Software Engineer Intern" company="HP" description="Made an interactive playground for UI components as a resource for both developers using these components and managers showing off progress. Fixed numerous bug fixes and implemented many visual features on React Native Windows application."/>
                        <JobEntry time="August 2023 - May 2024" title="College Peer Advisor" company="LeTourneau University" description="Tutored and aided the incoming freshman class of Computer Science and Cyber Security students. Helped them with classwork and getting acclimated to the college environment"/>
                        <JobEntry time="May 2021 - December 2022" title="Curbside Grocer" company="H-E-B" description='Assembled online orders and interacted with customers to provide friendly customer service. Recognized as the "Curbside Employee of the Month" on multiple occasions.'/>
                        <JobEntry time="Summer 2019 and Summer 2020" title="Soccer Coach" company="Sports Quest" description="Managed and worked with a team of coaches to organize events and activities to teach kids the fundamentals of soccer."/>
                    </div>                  
                </div>
                <div className='home-page-projects'>
                    <div className='home-page-projects-title' ref={projectsRef}>PROJECTS</div>
                    <ProjectList />
                </div>
                <test></test>
            </div>
        </motion.div>
    );
};

export default HomePage;