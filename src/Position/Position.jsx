import React from 'react';


class Position extends React.Component {
  state = {
    errorCondition: false,
    angryCount: 0
  }

  componentDidMount() {
    let position = document.getElementById('position');

    position.addEventListener('blur', () => {
      if (position.value && !this.state.angryCount) {
        this.props.setAngry(this.props.angry + 2);
        this.setState({ angryCount: this.state.angryCount + 1 })
      } else if (position.value && this.state.angryCount) {
        this.setState({ angryCount: this.state.angryCount + 1 })
      }
    });
  }

  render() {
    return (
      <div className='position'>
        <select size='1' required disabled={this.state.angryCount === 3} id='position'>
          <option disabled selected>Select your position</option>
          <option>HR Specialist</option>
          <option>Junior FrontEnd</option>
          <option>Junior BackEnd</option>
          <option>Middle FrontEnd</option>
          <option>Middle BackEnd</option>
          <option>Senior FrontEnd</option>
          <option>Senior BackEnd</option>
        </select>
      </div>
    )
  }
};

export default Position;
