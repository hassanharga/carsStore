import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import NavBar from './app/components/Navbar';

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    overflow-x-hidden

`}
`;

const Home = lazy(() => import('./app/containers/Home'));
const Cars = lazy(() => import('./app/containers/Cars'));
const Services = lazy(() => import('./app/containers/Services'));
const ContactUs = lazy(() => import('./app/containers/ContactUs'));

function App() {
  return (
    <AppContainer>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cars' exact component={Cars} />
          <Route path='/services' exact component={Services} />
          <Route path='/contact' exact component={ContactUs} />
        </Switch>
      </Suspense>
    </AppContainer>
  );
}

export default App;
