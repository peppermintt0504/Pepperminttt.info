import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/home/Home';
import "./App.css"
import "./fonts/font.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;