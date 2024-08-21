import React, { useEffect, useState } from 'react';
import './styles.css'; // Optional: Add styles for the toggle button

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
    );
};

export default ThemeToggle;