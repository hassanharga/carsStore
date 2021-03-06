import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from '../Logo';
import NavItems from './NavItems';

const NavBarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    justify-between
    lg:px-28
`};
`;

const LogoContainer = styled.div``;

const NavBar = () => {
  return (
    <NavBarContainer>
      <LogoContainer>
        <Logo color='dark' />
      </LogoContainer>
      <NavItems />
    </NavBarContainer>
  );
};

export default NavBar;
