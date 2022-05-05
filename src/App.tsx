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
// Styles
import './App.scss';

const App = () => {
  const { width } = useWindowDimensions();
  if (width > 600) {
    return (
      <div className="app">
        <Nav></Nav>
        <Hero></Hero>
        <WhoWeAre />
        <WhatWeDo />
        <OurProcess />
        <ToolsOfTheTrade />
        <ContactUs />
      </div>
    );
  } else {
    return <div>Mobile site not ready</div>;
  }
};

export default App;
