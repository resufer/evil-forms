import React from 'react';

class Contacts extends React.Component {
  state = {
    errorCondition: false,
    angryCount: 0
  }

  componentDidMount() {
    let email = document.getElementById('email');

    email.addEventListener('keyup', (e) => {
      if (!((e.key.codePointAt() >= 65 && e.key.codePointAt() <= 90)
        || (e.key.codePointAt() >= 97 && e.key.codePointAt() <= 122)
        || (e.key.codePointAt() >= 48 && e.key.codePointAt() <= 57)
        || e.key === '@' || e.key === '.')) {
        this.setState({ errorCondition: true });
        email.value = email.value.slice(0, email.value.length - 1);
        setTimeout(() => {
          this.setState({ errorCondition: false });
        }, 2000)
      }
    });

    email.addEventListener('blur', () => {
      if (email.value && !this.state.angryCount) {
        this.props.setAngry(this.props.angry + 2);
        this.setState({ angryCount: this.state.angryCount + 1 });
        setInterval(() => {
          this.setState({ angryCount: 3 })
        }, 6000);
      } else if (email.value && this.state.angryCount) {
        this.setState({ angryCount: this.state.angryCount + 1 });
        setInterval(() => {
          this.setState({ angryCount: 3 })
        }, 3500);
      }
    });
  }

  render() {
    return (
      <div className='contacts'>
        {this.state.errorCondition && <div className='alert'>Enter a valid email address</div>}
        <input type="email"
          placeholder='Your email'
          id='email'
          autocomplete="off"
          disabled={this.state.angryCount === 3} />
      </div>
    )
  }
};

export default Contacts;
