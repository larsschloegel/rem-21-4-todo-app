import {NavLink} from "react-router-dom"
import styled from "styled-components/macro"

export default function Navigation() {
  return (
        <StyledNav>
            <StyledNavLink to="/">All To-Do's</StyledNavLink>
            <StyledNavLink to="/To-Do">To-Do</StyledNavLink>
            <StyledNavLink to="/Doing">Doing</StyledNavLink>
            <StyledNavLink to="/Done">Done</StyledNavLink>
        </StyledNav>

  )
}
const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  gap: 5px;
  margin: 10px;
`

const StyledNavLink = styled(NavLink)`
  &:hover {
    background-color: rgb(60, 62, 68);
    cursor: pointer;
    transition: 0.5s;
  }
  font-size: 20px;
  color: white ;
  font-weight: bold;
  text-decoration: none;
  background-color: #FF8B8B;
  padding: 2px 20px 2px 20px;
  border-radius: 5px;
  text-align: center;
  width: 300px;
  box-shadow: 0px 4px 6px -1px;
  margin: 12px;
`