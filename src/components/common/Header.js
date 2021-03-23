import { useState, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { Toggle } from './Toggle'

const HeaderWrapper = styled.header`
  background-image: linear-gradient(
    to right,
    ${(p) => p.theme.primaryColor},
    ${(p) => p.theme.secondaryColor}
  );
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
`

const Menu = styled.nav`
  /* Mobile */
  display: ${(p) => (p.open ? 'block' : 'none')};
  font-family: 'Open sans';
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid #fdd54f;
  background: white;

  /* Desktop */
  @media (min-width: 768px) {
    display: flex;
    width: initial;
    border-bottom: none;
    background: none;
    margin: auto 0 auto auto;
    position: relative;
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
    position: relative;
  }
`

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>
}

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  color: black;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? 'bold' : 'normal')};
`

export function Header() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const { id, setTheme } = useContext(ThemeContext)

  const toggleMenu = () => {
    setMenuOpen((s) => !s)
  }

  return (
    <HeaderWrapper>
      <MobileMenuIcon>
        <FiMenu onClick={toggleMenu} />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to='/' isActive={pathname === '/'}>
          Home
        </StyledLink>
        <StyledLink to='/login' isActive={pathname === '/login'}>
          Login
        </StyledLink>
        <Toggle isActive={id === 'dark'} onToggle={setTheme} />
      </Menu>
    </HeaderWrapper>
  )
}
