import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Sum from './pages/Sum/Sum';

function App() {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sum" element={<Sum />} />
    </Routes>
  );
}

export default App;
