import React from 'react';


class Descriptions extends React.Component {
  state = {
    wordCount: 0,
    angryCount: 0
  }

  componentDidMount() {
    let descriptions = document.getElementById('descriptions');

    descriptions.addEventListener('keyup', (e) => {
      this.setState({ wordCount: descriptions.value.split(' ').length });
    });

    descriptions.addEventListener('blur', () => {
      if (descriptions.value && this.state.wordCount > 4) {
        setInterval(() => {
          this.setState({ angryCount: 3 });
          this.props.setAngry(this.state.wordCount / 4);
        }, 5000)
      }
    })
  }

  render() {
    return (
      <div className='descriptions'>
        <textarea placeholder='describe the situation' id='descriptions' disabled={this.state.angryCount === 3}></textarea>
      </div>
    )
  }
};

export default Descriptions;
