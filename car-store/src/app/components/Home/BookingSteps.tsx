import React, { useState } from 'react';
import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import tw from 'twin.macro';

const Conatianer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    py-3
    lg:py-7

  `}
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-4xl
    text-black
    font-extrabold     
  `}
`;

const StepsConatiner = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-16
  `}
`;

const StepConatiner = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    md:w-96
    transition-colors
    hover:text-red-500
    m-3
  `}
`;

const Step = styled.div`
  adow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    rounded-lg
    p-6
  `}
`;

const StepTitle = styled.h4`
  ${tw`
    text-lg
    text-black
     font-semibold   
     mt-4  
  `}
`;

const StepDescription = styled.p`
  ${tw`
    w-10/12
    text-xs
    md:text-sm
    text-center
    text-gray-600
  `}
`;

const StepIcon = styled.span`
  ${tw`
    text-3xl
    text-red-500
  `}
`;

const BookingSteps = () => {
  const [steps] = useState([
    {
      title: 'Choose Location',
      icon: faMapMarkedAlt,
      describtion: 'Find The Nearst Yourcar point and book tour car',
    },
    {
      title: 'Pick-Up Date',
      icon: faCalendarAlt,
      describtion: 'Pick Up the best date to rent car for you.',
    },
    {
      title: 'Book Your Car',
      icon: faCarSide,
      describtion: 'Book your car within one single click',
    },
  ]);
  return (
    <Conatianer>
      <Title>Our Working Steps</Title>
      <StepsConatiner>
        {steps.map((step, index) => (
          <StepConatiner key={index}>
            <Step>
              <StepIcon>
                <FontAwesomeIcon icon={step.icon} />
              </StepIcon>
            </Step>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.describtion}</StepDescription>
          </StepConatiner>
        ))}
      </StepsConatiner>
    </Conatianer>
  );
};

export default BookingSteps;
