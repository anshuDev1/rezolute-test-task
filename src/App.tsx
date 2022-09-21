import { useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { setupAxiosInterceptors } from './services/axios';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import { SearchHistory } from './pages/SearchHistory';
import { UserDetails } from './types/user';

setupAxiosInterceptors();

function App() {

  const [searchHistory, setSearchHistory] = useState<UserDetails[]>([])

  return (
    <div className="App">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home setSearchHistory={setSearchHistory} />} />
        <Route path="/history" element={<SearchHistory searchHistory={searchHistory} setSearchHistory={setSearchHistory} />} />
      </Routes>
    </div>
  );
}

export default App;
