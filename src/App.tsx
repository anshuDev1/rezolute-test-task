import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/navBar';
import { setupAxiosInterceptors } from './services/axios';

setupAxiosInterceptors();

function App() {


  return (
    <div className="App">
      <h1>rezolute test tasks</h1>
      <NavBar />
    </div>
  );
}

export default App;
