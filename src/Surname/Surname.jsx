import React from 'react';

class Surname extends React.Component {
  state = {
    errorCondition: false
  }

  componentDidMount() {
    let surname = document.getElementById('surname');
    surname.addEventListener('keyup', (e) => {
      if (!((e.key.codePointAt() >= 65 && e.key.codePointAt() <= 90)
        || (e.key.codePointAt() >= 97 && e.key.codePointAt() <= 122))) {
        this.setState({ errorCondition: true });
        surname.value = surname.value.slice(0, surname.value.length - 1)
        setTimeout(() => {
          this.setState({ errorCondition: false });
        }, 2000)
      }
    })
  }

  render() {
    return (
      <div className='inputSurname'>
        {this.state.errorCondition && <div className='alert'>You can use only a-Z</div>}
        <input placeholder='Your surname' id='surname' autocomplete="off" />
      </div>
    )
  }
};

export default Surname;
