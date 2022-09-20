import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navBar';
import { setupAxiosInterceptors } from './services/axios';
import { Toaster } from 'react-hot-toast';

setupAxiosInterceptors();

function App() {


  return (
    <div className="App">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <NavBar />
    </div>
  );
}

export default App;
