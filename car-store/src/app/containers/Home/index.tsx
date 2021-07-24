import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import TopSection from '../../components/TopSection';

const HomeContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
`}
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <TopSection />
    </HomeContainer>
  );
};

export default Home;
