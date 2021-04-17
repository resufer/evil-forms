import React from 'react';
import Contacts from "./Contacts/Contacts";
import Descriptions from "./Descriptions/Descriptions";
import Name from "./Name/Name";
import Position from "./Position/Position";
import Surname from "./Surname/Surname";

function App() {
  return (
    <div className='wrapper'>
      <div className='general'>
        <div className='general__title'>Filing a complaint</div>
        <div className='form'>
          <div className='inputs'>
            <Name />
            <Surname />
            <Position />
            <Contacts />
          </div>
          <div className='descriptionArea'>
            <Descriptions />
          </div>
        </div>
        <div className='send'>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
