import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import BookCard from '../../components/BookCard';
import BookingSteps from '../../components/BookingSteps';
import Marginer from '../../components/Marginer';
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
      <Marginer direction='vertical' margin='4em' />
      <BookCard />
      <Marginer direction='vertical' margin='7em' />
      <BookingSteps />
    </HomeContainer>
  );
};

export default Home;
