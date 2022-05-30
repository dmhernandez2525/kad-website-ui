// Outside packages
import react from 'react';

// Components
import {
  Hero,
  Nav,
  OurProcess,
  WhatWeDo,
  OurBusiness,
  ToolsOfTheTrade,
  ContactUs,
} from './components';

// Hooks
import useWindowDimensions from './hooks/useWindowDimensions';

// Images
import noPhone from './images/noPhone.png';

// Styles
import './App.scss';

const App = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="app">
      <Nav />
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
