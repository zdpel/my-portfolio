import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import HomePage from './pages/HomePage/HomePage';
import JobDetailsPage from './pages/JobDetailsPage/JobDetailsPage';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';

function App() {
  return (
    <HashRouter>
      <div className='main-content'>
        <AnimatedRoutes/>
      </div>
    </HashRouter>  
  );
}

export default App;
