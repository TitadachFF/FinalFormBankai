import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Restautant from './pages/Restautant';
import Add from './pages/Add';
import Search from './pages/Search';
import Update from './pages/Update';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <div className='App'>
        <Routes>
          <Route path="/" element={<Restautant /> }/>
          <Route path="/add" element={<Add /> }/>
          <Route path="/search" element={<Search /> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
