// Outside packages
import React from 'react';

// Components
import {
  Hero,
  Nav,
  OurProcess,
  WhatWeDo,
  OurBusiness,
  ToolsOfTheTrade,
  ContactUs,
  MobileNav,
} from './components';

// Images
import noPhone from './images/noPhone.png';

// Styles
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Nav />
      <MobileNav />
      <Hero></Hero>
      <OurBusiness />
      <WhatWeDo />
      <OurProcess />
      <ToolsOfTheTrade />
      <ContactUs hasFooter={true} />
    </div>
  );
};

export default App;
