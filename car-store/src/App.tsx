import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import NavBar from './app/components/Navbar';
import Home from './app/containers/Home';

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    overflow-x-hidden

`}
`;

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Home />
    </AppContainer>
  );
}

export default App;
