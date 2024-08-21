
export const handleScroll = () => {
    let text = document.getElementById('text');
    let timeline = document.getElementById('timeline');
    let projectList = document.getElementById('project-list');


    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        let maxScroll = 85; // Adjust this value based on your needs
        let opacity = Math.max(1 - value / maxScroll, 0);
        text.style.opacity = opacity;
    });
};