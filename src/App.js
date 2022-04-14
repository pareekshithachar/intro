import { Routes, Route, Router } from 'react-router-dom';
import Navbar from './components/navbar/navbar.js';
import './App.css';
import Home from './components/home/home.js';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import Projects from './components/projects/project.js';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 300,
      easing: 'ease-out-quart',
    });
  }, []);
  return (
    <>
      <div className='min-w-screen max-h-full overflow-hidden flex-row justify-center'>
        <Navbar />
        <Home />
      </div>
      {/* <div className="flex flex-col justify-center overflow-x-hidden">

         <Home />
        <Projects/>
      </div> */}






    </>


  );
}

export default App;
