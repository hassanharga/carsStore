import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import NavBar from './app/components/Navbar';

const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
`}
`;

function App() {
  return (
    <AppContainer className='App'>
      <NavBar />
    </AppContainer>
  );
}

export default App;
