import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../../constants/screens';
import JeepImg from '../../../assets/images/jeep.png';

const AboutUsContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        py-4
        px-7
        md:px-0
        bg-white
    `}
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -30px;
  img {
    width: auto;
    height: 100%;
  }
  @media (min-width: ${SCREENS['2xl']}) {
    height: 35em;
    margin-left: 0;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    flex
    flex-col
    2xl:ml-16
    md:ml-6
    md:w-1/2
  `}
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black 
    md:leading-normal
  `}
`;
const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
    `}
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} alt='' />
      </CarContainer>
      <InfoContainer>
        <Title>Fell The Best Experience With Our Rental Deals </Title>
        <InfoText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          dicta voluptate modi libero fuga iure iusto maxime optio non
          blanditiis quas eos, eum aperiam sequi possimus tempore velit illo.
          Deleniti delectus qui repellat iure doloribus nobis. Quae corrupti,
          voluptas quaerat dignissimos incidunt, minima laboriosam eos dolore,
          ipsam veritatis veniam itaque ullam? Et officiis exercitationem minima
          unde sed voluptatum doloremque natus eligendi rem magnam qui mollitia
          similique accusantium, iure hic.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
