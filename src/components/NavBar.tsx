import { useState } from "react";
import { BrowserRouter as Router, NavLink as Link, Route, Routes } from "react-router-dom";
import { SearchGitHubUser } from "../pages/SearchGitHubUser";
import { SearchHistory } from "../pages/SearchHistory";
import { NavLink, NavMenu } from "../styles/navBarStyle"
import { UserDetails } from "../types/user";

export const NavBar = () => {
  const [searchHistory, setSearchHistory] = useState<UserDetails[]>([])

  return (
    <Router>
      <div>
        <div className="d-flex m-4">
          <NavMenu>
            <NavLink to="/">Rezolute Test Task</NavLink>
            <NavLink to="/">Search User</NavLink>
            <NavLink to="/history">History</NavLink>
          </NavMenu>
        </div>
        <Routes>
          <Route path="/" element={<SearchGitHubUser setSearchHistory={setSearchHistory} />} />
          <Route path="/:id" element={<SearchGitHubUser setSearchHistory={setSearchHistory} />} />
          <Route path="/history" element={<SearchHistory searchHistory={searchHistory} setSearchHistory={setSearchHistory} />} />
        </Routes>
      </div>
    </Router >

  )
}
