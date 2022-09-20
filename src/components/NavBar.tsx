import { useState } from "react"
import { NavLink, NavMenu, Nav, Bars } from "../styles/navBarStyle"

export const NavBar = () => {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <Nav>
      <Bars onClick={() => setToggle(!toggle)} />
      <NavMenu toggle={toggle}>
        <NavLink to="/">Rezolute Test Task</NavLink>
        <NavLink to="/">Search User</NavLink>
        <NavLink to="/history">History</NavLink>
      </NavMenu>
    </Nav>
  )
}
