import React from 'react'
import Home from './Pages/Home/Home'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Experience from './Pages/Experience/Experience';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Routes>
          <Route path='/resume/home' element={<Home />} />
          <Route path='/resume/about' element={<About />} />
          <Route path='/resume/experience' element={<Experience />} />
          <Route path='/resume/contact' element={<Contact />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
