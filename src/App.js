import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js';
import Events from './components/pages/Events.js';
import Menu from './components/pages/Menu.js';
import Login from './components/pages/Login.js';
import Reserve from './components/pages/Reserve.js';
import Support from './components/pages/Support.js';
import Cart from './components/pages/Cart.js';
import Soups from './components/Soups.js';
import Salad from './components/Salad.js';
import Appetizers from './components/Appetizers.js';
import Tandoori from './components/Tandoori.js';
import Platters from './components/Platters.js';
import Egg from './components/Egg.js';
import Bbq from './components/Bbq.js';
import Barbites from './components/Barbites.js';
import Sandwich from './components/Sandwich.js';
import Pasta from './components/Pasta.js';
import Pizza from './components/Pizza.js';
import Breads from './components/Breads.js';
import Maincourse from './components/Maincourse.js';
import Rice from './components/Rice.js';
import Noodles from './components/Noodles.js';
import Milkshake from './components/Milkshake.js';
import Mocktails from './components/Mocktails.js';
import Dessert from './components/Dessert.js';
import Cocktail from './components/Cocktail.js';

function App() {




  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Events' element={<><Events /></>} />
        <Route path='/Support' element={<><Support /></>} />
        <Route path='/login' element={<><Login /></>} />
        <Route path='/Reserve' element={<><Reserve /></>} />

        <Route path='/Soups' element={<Soups />} />
        <Route path='/Salad' element={<Salad />} />
        <Route path='/Appetizers' element={<Appetizers />} />
        <Route path='/Tandoori' element={<Tandoori />} />
        <Route path='/Platters' element={<Platters />} />
        <Route path='/Egg' element={<Egg />} />
        <Route path='/Bbq' element={<Bbq />} />
        <Route path='/Barbites' element={<Barbites />} />
        <Route path='/Sandwich' element={<Sandwich />} />
        <Route path='/Pasta' element={<Pasta />} />
        <Route path='/Pizza' element={<Pizza />} />
        <Route path='/Breads' element={<Breads />} />
        <Route path='/Maincourse' element={<Maincourse />} />
        <Route path='/Rice' element={<Rice />} />
        <Route path='/Noodles' element={<Noodles />} />
        <Route path='/Milkshake' element={<Milkshake />} />
        <Route path='/Mocktails' element={<Mocktails />} />
        <Route path='/Dessert' element={<Dessert />} />
        <Route path='/Cocktail' element={<Cocktail />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;