import React from 'react'
import './App.css';
import Selection from '../src/Components/KvinnersRettigheter/Selection'
import Option from './Components/Option'
import LgbtqSelection from '../src/Components/LGBTQ/lgbtqSelection'
import YtringSelection from '../src/Components/Ytringsfrihet/ytringSelection'
import OmOss from '../src/Components/OmSiden/omoss'

function App() {

  return (
    <div className="App">
      <OmOss />
      <Option />  
      <Selection  className="kvinnerSelection"/>
      <LgbtqSelection className="lgbtqSelection" />
      <YtringSelection className="ytringSelection" />
    </div>
  );
}

export default App;
