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

// Hooks
import useWindowDimensions from './hooks/useWindowDimensions';

// Images
import noPhone from './images/noPhone.png';

// Styles
import './App.scss';

const App = () => {
  const { width } = useWindowDimensions();
  if (width > 1000) {
    return (
      <div className="app">
        <Nav />
        <Hero></Hero>
        <WhoWeAre />
        <WhatWeDo />
        <OurProcess />
        <ToolsOfTheTrade />
        <ContactUs hasFooter={true} />
      </div>
    );
  } else {
    return (
      <div className="app__not-ready">
        <p>
          Sorry, we are not ready for you yet. We're working on improving our
          mobile experience.
        </p>
        <p>Please view the website on a larger screen</p>
        <img src={noPhone} alt="noPhone" />
      </div>
    );
  }
};

export default App;
