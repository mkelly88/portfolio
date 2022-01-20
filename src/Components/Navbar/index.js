import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElement';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome} className="font-link">Madison Kelly</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" spy={true} smooth={true} duration={1000} offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="project" spy={true} smooth={true} duration={1000} offset={-80}>Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact" spy={true} smooth={true} duration={1000} offset={-80}>Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;