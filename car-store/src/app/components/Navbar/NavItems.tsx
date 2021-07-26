import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../../constants/screens';
import menuStyles from './menuStyles';

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
`};
`;

const NavItem = styled.li<{ menu?: boolean }>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-500
  `};
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
        text-xl
        text-white
        font-medium
        mb-3
        focus:text-white
      `};
    `}
`;

const NavItems = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  return (
    <>
      {isMobile ? (
        <Menu styles={menuStyles} right>
          <ListContainer>
            <NavItem menu>
              <Link to='/'>Home</Link>
            </NavItem>
            <NavItem menu>
              <Link to='/cars'>Cars</Link>
            </NavItem>
            <NavItem menu>
              <Link to='/services'>Services</Link>
            </NavItem>
            <NavItem menu>
              <Link to='/contactus'>Contact Us</Link>
            </NavItem>
          </ListContainer>
        </Menu>
      ) : (
        <ListContainer>
          <NavItem>
            <Link to='/'>Home</Link>
          </NavItem>
          <NavItem>
            <Link to='/cars'>Cars</Link>
          </NavItem>
          <NavItem>
            <Link to='/services'>Services</Link>
          </NavItem>
          <NavItem>
            <Link to='/contact'>Contact Us</Link>
          </NavItem>
        </ListContainer>
      )}
    </>
  );
};

export default NavItems;
