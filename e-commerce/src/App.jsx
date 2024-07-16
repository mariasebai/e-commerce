
import React from 'react';
import './App.css';
import Products from './components/Products';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Products />
      </main>
    </div>
  );
}

export default App;
