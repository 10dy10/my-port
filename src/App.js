import './css/reset.css';
import { useState } from 'react';
import Main from './components/Main';
import About from './components/About';
import Portfolio from './components/Portfolio';
import {SectionsContainer, Section} from 'react-fullpage';
import './css/common.css';

function App() {
  
  const year = new Date().getFullYear()
  let options = {
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
    navigation: false,
  }

  return (
    <div className="App">
      {/* <Main year={year}></Main> */}
      <SectionsContainer {...options}>
        <Section>
          <Main year={year}></Main>
        </Section>
        <Section>
          <About/>
        </Section>
        <Section>
          <Portfolio/>
        </Section>
      </SectionsContainer>
    </div>
  );
}

export default App;
