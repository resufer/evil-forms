import React from 'react';
import Contacts from "./Contacts/Contacts";
import Descriptions from "./Descriptions/Descriptions";
import Name from "./Name/Name";
import Position from "./Position/Position";
import Surname from "./Surname/Surname";

function App() {
  let [angry, setAngry] = React.useState(0);

  return (
    <div className='wrapper'>
      <div className='general'>
        <div className='general__title'>Filing a complaint</div>
        <div className='form'>
          <div className='inputs'>
            <Name angry={angry} setAngry={setAngry} />
            <Surname angry={angry} setAngry={setAngry} />
            <Position angry={angry} setAngry={setAngry} />
            <Contacts angry={angry} setAngry={setAngry} />
          </div>
          <div className='descriptionArea'>
            <Descriptions angry={angry} setAngry={setAngry} />
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
