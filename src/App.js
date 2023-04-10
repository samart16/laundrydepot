import React from 'react';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Cards from './components/Cards';
import FeedbackForm from './components/pages/ContactUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Home.js' element={<Home/>}/>
          <Route path='/Cards.js' element={<Cards/>}/>
          <Route path='/ContactUs.js' element={<FeedbackForm/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
