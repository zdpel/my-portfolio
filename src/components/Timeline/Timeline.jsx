import React from 'react';

const Timeline = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        const elements = document.querySelectorAll('.timeline-entry');
        elements.forEach((element) => {
            observer.observe(element);
        });
        
        handleScroll();

        return () => {
            elements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);
    return (
    <div className='career-timeline' id='timeline'>
        <div className='career-timeline-title'>CAREER TIMELINE</div>
        <div className='career-timeline-content'>
            <TimelineEntry title="Software Engineer Intern at HP" id="hpswe2" time="Summer 2024" position="left" image={hpLogo}/>
            <TimelineEntry title="Web Development Contractor" time="Winter 2023" position="right"/>
            <TimelineEntry title="UI/UX Software Engineer Intern at HP" time="Summer 2023" position="left" image={hpLogo}/>
            <TimelineEntry title="College Peer Advisor" time="Fall 2023 - Spring 2024" position="right"/>
            <TimelineEntry title="HEB Curbside Assistant" time="Summer 2021 - Winter 2022" position="left"/>
            <TimelineEntry title="Started College" time="Fall 2022" description="Computer Science at LeTourneau University" position="right"/>
            <TimelineEntry title="Assistant Soccer Coach" time="Summer 2019 and Summer 2020" position="left"/>
        </div>
    </div>
    );
};

export default Timeline;