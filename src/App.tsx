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

// Hooks
import useWindowDimensions from './hooks/useWindowDimensions';

// Styles
import './App.scss';

const App = () => {
  // ====================
  // Hooks
  // ====================
  const { width } = useWindowDimensions();

  return (
    <div className="app">
      <Nav />
      {width < 1000 && <MobileNav />}
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
