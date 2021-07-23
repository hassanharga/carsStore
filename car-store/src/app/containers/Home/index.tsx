import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const HomeContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
`}
`;

const Home: React.FC = () => {
  return <HomeContainer>Home</HomeContainer>;
};

export default Home;
