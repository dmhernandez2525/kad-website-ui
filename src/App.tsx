// Outside packages
import react from 'react';

// Components
import {
  Hero,
  Nav,
  OurProcess,
  WhatWeDo,
  WhoWeAre,
  ToolsOfTheTrade,
  ContactUs,
} from './components';

// Styles
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Nav></Nav>
      <Hero></Hero>
      <OurProcess></OurProcess>
      <WhatWeDo />
      <WhoWeAre />
      <ToolsOfTheTrade />
      <ContactUs />
    </div>
  );
};

export default App;
