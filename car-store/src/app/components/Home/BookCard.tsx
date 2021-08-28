import React, { useState } from 'react';
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import Button from './Button';
import Marginer from '../Marginer';
import { SCREENS } from '../../../constants/screens';

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    py-1
    px-2
    md:px-9
    md:py-2
  `}
`;

const ItemContainer = styled.div`
  ${tw`relative flex justify-center items-center`}
`;

const Icon = styled.span`
  ${tw`
    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
  `}
`;

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    sm:text-xs
    md:text-sm
    cursor-pointer
    select-none
  `}
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mx-2
    md:mx-5
  `};
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none !important;
  user-select: none;
  top: 3em;
  left: 0;

  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `}
  @media (min-width: ${SCREENS.sm}) {
    top: 3.5em;
    left: -2em;
  }
` as any;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
  `}
`;

const BookCard = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState(new Date());

  const toggleCalnedar = () => {
    setIsCalendarOpen(!isCalendarOpen);
    if (isReturnCalendarOpen) setIsReturnCalendarOpen(false);
  };
  const toggleReturnCalendar = () => {
    setIsReturnCalendarOpen(!isReturnCalendarOpen);
    if (isCalendarOpen) setIsCalendarOpen(false);
  };
  const changestartDate = (date: Date) => {
    setStartDate(date);
  };

  const changeReturnDate = (date: Date) => {
    setReturnDate(date);
  };

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleCalnedar}>Pick Up Date</Name>
        <SmallIcon>
          <FontAwesomeIcon icon={isCalendarOpen ? faCaretUp : faCaretDown} />
        </SmallIcon>
        {isCalendarOpen && (
          <DateCalendar value={startDate} onChange={changestartDate} />
        )}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnCalendar}>Return Name</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar offset value={returnDate} onChange={changeReturnDate} />
        )}
      </ItemContainer>
      <Marginer direction='horizontal' margin='2em' />
      <Button text='Book Your Ride' theme='outlined' />
    </CardContainer>
  );
};

export default BookCard;
