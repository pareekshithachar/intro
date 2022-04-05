import {Routes , Route, Router} from 'react-router-dom';
import Navbar from './components/navbar/navbar.js';
import './App.css';
import Home from './components/home/home.js';
import AOS from 'aos';
import {useEffect, useState} from 'react';
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
    <div className='min-w-screen min-h-screen overflow-hidden'>
    <Navbar/>
      <div className =" ml-20 flex flex-col justify-center items-center relative max-h-full ">
   
      <Home/>
      <Home/>

      <Home/>
      <Home/>
      <Home/>

    
    
      </div>
    </div>
   
    
    
    
    </>
    
    
  );
}

export default App;
