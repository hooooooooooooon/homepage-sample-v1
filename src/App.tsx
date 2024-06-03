import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import Tv from './routes/Tv';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/tv" element={<Tv />} />
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
