import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import AboutUs from '../../components/Home/AboutUs';
import BookCard from '../../components/Home/BookCard';
import BookingSteps from '../../components/Home/BookingSteps';
import Footer from '../../components/Footer';
import Marginer from '../../components/Marginer';
import TopCars from '../../components/Home/TopCars';
import TopSection from '../../components/Home/TopSection';

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
      <Marginer direction='vertical' margin='10em' />
      <BookingSteps />
      <Marginer direction='vertical' margin='8em' />
      <AboutUs />
      <Marginer direction='vertical' margin='8em' />
      <TopCars />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
