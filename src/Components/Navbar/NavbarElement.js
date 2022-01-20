import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
 background: #F3F0DF;
 height: 80px;
 /* margin-top: -80px; */
 disply: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
top: 0;
z-index: 10;

@media screen and (max-width: 60px) {
    transistion: 0.8s all ease:
}
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 10%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #E2C81F;
    justify-self: flex-start;
    cursor:pointer:
    font-size: 1.rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 25px;
    right:25px;
    transform: translated(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #E2C81F;
}
`;

export const NavMenu = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-left: 725px;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 786px) {
        display: none;
    }
`;

export const NavItem = styled.li`
 height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #6E6D6D;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 30px;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #FE4848;
    }
`;

