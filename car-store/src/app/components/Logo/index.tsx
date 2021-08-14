import React, { FC } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import CarLogoImg from '../../../assets/images/car-logo.png';
import CarDarkLogoImg from '../../../assets/images/car-logo-dark.png';

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
    mx-5
`};
`;

const LogoText = styled.div<{ color: 'white' | 'dark' }>`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
    `};
  ${({ color }) => (color === 'white' ? tw`text-white` : tw`text-black`)}
`;
const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`};
  img {
    width: auto;
    height: 100%;
  }
`;

type Props = {
  color: 'white' | 'dark';
};

const Logo: FC<Props> = ({ color }) => {
  return (
    <LogoContainer>
      <Image>
        <img
          src={color === 'dark' ? CarLogoImg : CarDarkLogoImg}
          alt='car logo'
        />
      </Image>
      <LogoText color={color}>Your Car.</LogoText>
    </LogoContainer>
  );
};

export default Logo;
