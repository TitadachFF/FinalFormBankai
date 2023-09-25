import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Restaurant from './pages/Restaurant'
import Add from './pages/Add'
import Search from './pages/Search'
import Update from './pages/Update';

function App() {
  

  return (
    <BrowserRouter>
    <NavBar/>
    <div className='App'>
      <Routes>
        <Route path="/" element={<Restaurant />} />
        <Route path="/add" element={<Add />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Update/:restaurantId" element={<Update />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
