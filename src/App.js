import React from 'react';
import Contacts from "./Contacts/Contacts";
import Descriptions from "./Descriptions/Descriptions";
import Name from "./Name/Name";
import Position from "./Position/Position";
import Surname from "./Surname/Surname";

class App extends React.Component {
  state = {
    angry: 0
  }

  setAngry(angry) {
    this.setState({ angry: angry })
  }

  componentDidUpdate() {
    let wrapper = document.querySelector('.wrapper');
    wrapper.style.backgroundColor = `rgb(
      ${255 - this.state.angry * 10},
      ${255 - this.state.angry * 10},
      ${255 - this.state.angry * 10}
      )`
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='general'>
          <div className='general__title'>Filing a complaint</div>
          <div className='form'>
            <div className='inputs'>
              <Name angry={this.state.angry} setAngry={this.setAngry.bind(this)} />
              <Surname angry={this.state.angry} setAngry={this.setAngry.bind(this)} />
              <Position angry={this.state.angry} setAngry={this.setAngry.bind(this)} />
              <Contacts angry={this.state.angry} setAngry={this.setAngry.bind(this)} />
            </div>
            <div className='descriptionArea'>
              <Descriptions angry={this.state.angry} setAngry={this.setAngry.bind(this)} />
            </div>
          </div>
          <div className='send'>
            <button disabled={this.state.angry < 10}>Send</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
