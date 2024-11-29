import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import styled, { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  cursor: pointer;
`;

const ToggleSwitch = styled.div`
  background-color: ${({ theme }) => theme.toggleBg};
  border-radius: 30px;
  width: 40px;
  height: 20px;
  display: flex;
  align-items: center;
  position: relative;
  transition: background-color 0.3s ease;
`;

const ToggleBall = styled.div`
  background-color: ${({ theme }) => theme.toggleBall};
  width: 20px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${({ darkMode }) => (darkMode ? '2px' : '20px')};
  transition: left 0.3s ease;
`;

const ToggleLabel = styled.span`
  font-size: 0.9rem;
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  background-color: ${({ darkMode }) => (darkMode ? 'black' : 'white')};
  border-radius: 12px;
  padding: 4px 8px;
  margin: 0 0.5rem;
  transition: background-color 0.3s, color 0.3s;
`;

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo as={Link} to='/'>
          <div style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </div>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Home</NavLink>
          <NavLink href="#aboutme">AboutMe</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github</GitHubButton>
          <ToggleContainer onClick={() => setDarkMode(!darkMode)}>
            <ToggleLabel darkMode={darkMode}>{darkMode ? "Dark" : "Light"}</ToggleLabel>
            <ToggleSwitch>
              <ToggleBall darkMode={darkMode} />
            </ToggleSwitch>
          </ToggleContainer>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>Home</MobileLink>
            <MobileLink href="#aboutme" onClick={() => setIsOpen(!isOpen)}>AboutMe</MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(!isOpen)}>Skills</MobileLink>
            <MobileLink href="#experience" onClick={() => setIsOpen(!isOpen)}>Experience</MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(!isOpen)}>Projects</MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(!isOpen)}>Education</MobileLink>
            <MobileLink href="#contact" onClick={() => setIsOpen(!isOpen)}>Contact</MobileLink>
            <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github</GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
