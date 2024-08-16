import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

function App() {
  console.log(process.env.PUBLIC_URL)
  return (
    <HashRouter >
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </HashRouter>  
  );
}

export default App;
