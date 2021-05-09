import React from 'react';
import Contacts from "./Contacts/Contacts";
import Descriptions from "./Descriptions/Descriptions";
import { End } from './End/End';
import Name from "./Name/Name";
import Position from "./Position/Position";
import { runaway } from './runaway';
import Surname from "./Surname/Surname";

class App extends React.Component {
  state = {
    angry: 0,
  }

  setAngry(angry) {
    this.setState({ angry: this.state.angry + angry })
  }

  componentDidMount() {
    runaway(this.setAngry.bind(this), this.state.name, this.state.surname);
  }

  componentDidUpdate() {
    if (this.state.angry < 10000) {
      let wrapper = document.querySelector('.wrapper');
      wrapper.style.backgroundColor = `rgb(
      ${0 + this.state.angry * 5},
      ${0}, ${0})`;
    }
  }

  render() {
    if (this.state.angry >= 10000) {
      return <End />
    }
 
    return (
      <div className='wrapper'>
        <div className='general'>
          <div className='general__title'>Filing a complaint</div>
          <div className='form'>
            <div className='inputs'>
              <Name setAngry={this.setAngry.bind(this)}/>
              <Surname setAngry={this.setAngry.bind(this)}/>
              <Position setAngry={this.setAngry.bind(this)} />
              <Contacts setAngry={this.setAngry.bind(this)} />
            </div>
            <div className='descriptionArea'>
              <Descriptions angry={this.state.angry} setAngry={this.setAngry.bind(this)} />
            </div>
          </div>
          <div className='send'>
            <button disabled={this.state.angry < 10}>Send</button>
            <button className='hidden' onClick={() => { window.location.reload()}}>
              clear!!!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
