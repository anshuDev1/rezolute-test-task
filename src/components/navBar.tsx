import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { SearchGitHubUser } from "../pages/searchGitHubUser";
import { SearchHistory } from "../pages/searchHistory";

export const NavBar = () => {
  const [searchHistory, setSearchHistory] = useState<string[]>([])

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Search User</Link>
            </li>
            <li>
              <Link to="/history">History</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<SearchGitHubUser setSearchHistory={setSearchHistory} />} />
          <Route path="/:id" element={<SearchGitHubUser setSearchHistory={setSearchHistory} />} />
          <Route path="/history" element={<SearchHistory searchHistory={searchHistory} setSearchHistory={setSearchHistory}/>} />
        </Routes>
      </div>
    </Router>

  )
}