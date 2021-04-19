import React from 'react';


class Name extends React.Component {
  state = {
    errorCondition: false,
    angryCount: 0
  }

  componentDidMount() {
    let name = document.getElementById('name');

    name.addEventListener('keyup', (e) => {
      if (!((e.key.codePointAt() >= 65 && e.key.codePointAt() <= 90)
        || (e.key.codePointAt() >= 97 && e.key.codePointAt() <= 122))) {
        this.setState({ errorCondition: true });
        name.value = name.value.slice(0, name.value.length - 1)
        setTimeout(() => {
          this.setState({ errorCondition: false });
        }, 2000)
      }
    });

    name.addEventListener('blur', () => {
      if (name.value && !this.state.angryCount) {
        this.props.setAngry(this.props.angry + 2);
        this.setState({ angryCount: this.state.angryCount + 1 })
      } else if (name.value && this.state.angryCount) {
        this.setState({ angryCount: this.state.angryCount + 1 })
      }
    });
  }

  render() {
    return (
      <div className='inputName'>
        {this.state.errorCondition && <div className='alert'>You can use only a-Z</div>}
        <input placeholder='Your name' id='name' autocomplete="off" disabled={this.state.angryCount === 3} />
      </div>
    )
  }
};

export default Name;
