import React, { useState } from 'react';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../../constants/screens';
import { ICar } from '../../../typings/Car';
import Car from '../Car';

const TopCarsContainer = styled.div`
  ${tw`
     max-w-screen-lg
     w-full
     flex
     flex-col
     justify-center 
     items-center
     px-4
     md:px-0
     mb-10
   `}
`;
const CarsContainer = styled.div`
  ${tw`
     w-full
     flex
     flex-wrap
     justify-center 
     mt-7
     md:mt-10
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

const TopCars = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const [current, setCurrent] = useState(0);
  const [cars] = useState<ICar[]>([
    {
      name: 'Honda City 6 seater Car',
      thumbnailSrc:
        'https://www.india.com/wp-content/uploads/2014/07/honda-mobilio-01.jpg',
      gas: 'Petrol',
      mileAge: '50K',
      gearType: 'Auto',
      dailyPrice: 50,
      monthlyPrice: 1500,
      id: '666',
    },
    {
      name: 'Toyota Corolla',
      thumbnailSrc:
        'https://ymimg1.b8cdn.com/resized/car_model/6185/logo/listing_main_2020_corolla_logo.png',
      gas: 'Petrol',
      mileAge: '80K',
      gearType: 'Auto',
      dailyPrice: 50,
      monthlyPrice: 3000,
      id: '555',
    },
    {
      name: 'Audo s6 2021',
      thumbnailSrc:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-s6-mmp-1-1591381093.jpg?crop=0.583xw:0.656xh;0.329xw,0.344xh&resize=640:*',
      gas: 'Petrol',
      mileAge: '100K',
      gearType: 'Auto',
      dailyPrice: 80,
      monthlyPrice: 200000,
      id: '333',
    },
  ]);
  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={cars.map(({ id, ...car }) => (
            <Car key={id} id={id} {...car} />
          ))}
          plugins={[
            'clickToChange',
            { resolve: slidesToShowPlugin, options: { numberOfSlides: 3 } },
          ]}
          breakpoints={
            {
              640: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            } as any
          }
        />
        <Dots
          value={current}
          onChange={setCurrent}
          number={isMobile ? cars.length : Math.ceil(cars.length / 3)}
        />
      </CarsContainer>
    </TopCarsContainer>
  );
};

export default TopCars;
