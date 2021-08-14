import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type Props = {
  theme: 'filled' | 'outlined';
  text: string;
  className?: string;
};

const BaseContainer = styled.button`
  ${tw`
    px-5
    py-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    ease-in-out
    duration-200
    m-1
  `}
`;

const OutlinedBtn = styled(BaseContainer)`
  ${tw`
    bg-red-500
    hover:bg-transparent
    hover:text-red-500
    hover:border-red-500
  `}
`;

const FilledBtn = styled(BaseContainer)`
  ${tw`
    bg-transparent
    text-red-500
    border-red-500
    hover:bg-red-500
    hover:text-white
    hover:border-transparent
  `}
`;

const Button: React.FC<Props> = ({ text, theme, className }) => {
  return (
    <>
      {theme === 'filled' ? (
        <FilledBtn className={className}>{text}</FilledBtn>
      ) : (
        <OutlinedBtn className={className}>{text}</OutlinedBtn>
      )}
    </>
  );
};

export default Button;
