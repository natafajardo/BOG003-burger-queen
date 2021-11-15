import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Waiter from './pages/Waiter/Waiter';
import Chef from './pages/Chef/Chef';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tables" element={<Waiter />} />
          <Route path="kitchen" element={<Chef />} />
        </Routes>
      </BrowserRouter>,
    </div>
  )
}

export default App
