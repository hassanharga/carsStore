import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Car as CarProps } from '../../../generated/graphql';
import Button from './Button';

interface ICarProps extends CarProps {}

const CarContainer = styled.div`
  width: 16.5em;
  min-height: 22.2em;
  max-height: 25.2em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
     flex
     flex-col
     items-center 
     p-3
     pb-4
     m-1
     md:m-3
     sm:m-6
     bg-white
     rounded-md
   `}
`;

const CarThumbnail = styled.div`
  width: 100%;
  height: 12em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const CarName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    my-1
`}
`;

const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    mt-3
`}
`;

const SmallText = styled.p`
  color: inherit;
  ${tw`
  inline-flex
    text-xs
    font-thin
  `}
`;

const DailyPrice = styled.h5`
  ${tw`
    text-red-500
    font-bold
    text-sm
    mx-3
`}
`;

const MonthlyPrice = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
`}
`;

const SmallIcon = styled.span`
  ${tw`
    to-gray-400
    text-sm
    mr-1
`}
`;

const CarDetailsContainer = styled.div`
  ${tw`
    flex
    justify-between
    w-full
`}
`;

const CarDetail = styled.div`
  ${tw`
    flex
    items-center
`}
`;

const CarInfo = styled.h6`
  ${tw`
    text-gray-400
    text-xs
`}
`;

const Seperator = styled.h6`
  min-width: 1005;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    my-2
`}
`;

const RentButton = styled(Button)`
  ${tw`
    mt-5
    min-w-full
  `}
`;

const Car: React.FC<ICarProps> = ({
  gas,
  thumbnailUrl,
  name,
  monthlyPrice,
  gearType,
  dailyPrice,
  mileAge,
}) => {
  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailUrl} alt='' />
      </CarThumbnail>
      <CarName>{name}</CarName>
      <PricesContainer>
        <DailyPrice>
          ${dailyPrice}
          <SmallText>/Day</SmallText>
        </DailyPrice>
        <MonthlyPrice>
          ${monthlyPrice}
          <SmallText>/Month</SmallText>
        </MonthlyPrice>
      </PricesContainer>
      <Seperator />
      <CarDetailsContainer>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <CarInfo>{mileAge}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </SmallIcon>
          <CarInfo>{gearType}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>{gas}</CarInfo>
        </CarDetail>
      </CarDetailsContainer>
      <RentButton text='Rent Now' theme='outlined' />
    </CarContainer>
  );
};

export default Car;
