
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const NavLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
padding: 10px;
height: 100%;
cursor: pointer;
&.active {
  color: #000000;
}
`;

export const NavMenu = styled.div.attrs((props: { toggle: boolean }) => props)`
display: flex;
padding:20px;

@media screen and (max-width: 768px) {
  display: ${props => (props.toggle === true ? "block" : "none")};
  height:100%;
}
`;

export const Nav = styled.nav`
  background: #ccc;
  color:#000;
  height: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 12;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;