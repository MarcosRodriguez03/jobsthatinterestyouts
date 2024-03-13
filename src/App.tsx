import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePageComponent from './Components/Pages/HomePageComponent';
import DiscordComponent from './Components/Pages/DiscordComponent';
import GoogleComponent from './Components/Pages/GoogleComponent';
import MicrosoftComponent from './Components/Pages/MicrosoftComponent';
import MojangComponent from './Components/Pages/MojangComponent';
import NvidiaComponent from './Components/Pages/NvidiaComponent';
import NavbarComponent from './Components/NavbarComponent';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomePageComponent />} />
        <Route path='/discord' element={<DiscordComponent />} />
        <Route path='/google' element={<GoogleComponent />} />
        <Route path='/mircosoft' element={<MicrosoftComponent />} />
        <Route path='/mojang' element={<MojangComponent />} />
        <Route path='/nvidia' element={<NvidiaComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
