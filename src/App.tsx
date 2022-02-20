// Outside packages
import react from 'react';

// Components
import { Hero, Nav, OurProcess, WhatWeDo, WhoWeAre } from './components';

// Styles
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Nav></Nav>
      <Hero></Hero>
      <OurProcess></OurProcess>
      <WhatWeDo></WhatWeDo>
      <WhoWeAre></WhoWeAre>
    </div>
  );
};

export default App;
