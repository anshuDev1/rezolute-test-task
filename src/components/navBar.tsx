import React, { useState } from "react";
import { BrowserRouter as Router, NavLink as Link, Route, Routes } from "react-router-dom";
import { SearchGitHubUser } from "../pages/searchGitHubUser";
import { SearchHistory } from "../pages/searchHistory";
// import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { userDetails } from "../types/user";

export const NavBar = () => {
  const [searchHistory, setSearchHistory] = useState<userDetails[]>([])

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

export const Nav = styled.nav`
  background: #63D471;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

// export const Bars = styled(FaBars)`
//   display: none;
//   color: #808080;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;