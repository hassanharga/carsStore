import React, { useEffect, useState } from 'react';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from 'react-responsive';
import { MoonLoader } from 'react-spinners';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../../constants/screens';
import { useCarsQuery } from '../../../generated/graphql';
import { setTopCars } from '../../store/homeSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Car from './Car';

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

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `}
`;

const TopCars = () => {
  const dispatch = useAppDispatch();
  const topCars = useAppSelector((state) => state.homePage.topCars);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const { data } = useCarsQuery();

  useEffect(() => {
    // const getcars = async () => {
    //   await wait(5000);
    if (!data?.cars) return;
    dispatch(setTopCars(data!.cars));
    // };
    // getcars();
  }, [data, dispatch]);

  const [current, setCurrent] = useState(0);

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      {!topCars || topCars.length === 0 ? (
        <LoadingContainer>
          <MoonLoader loading size={20} />
        </LoadingContainer>
      ) : (
        <CarsContainer>
          <Carousel
            value={current}
            onChange={setCurrent}
            slides={topCars.map(({ id, ...car }) => (
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
            number={isMobile ? topCars.length : Math.ceil(topCars.length / 3)}
          />
        </CarsContainer>
      )}
    </TopCarsContainer>
  );
};

export default TopCars;
