import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queryResult: '',
    };
  }

  handleClick(e) {
    axios.get('/test')
      .then((res) => {
        this.setState({
          queryResult: JSON.stringify(res.data),
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  render() {
    const { queryResult } = this.state;

    return (
      <div className='container'>
        <div>
          <button onClick={e => this.handleClick(e)}>Select Hello World</button>
          <div>{queryResult}</div>
        </div>
      </div>
    );
  }
}

export default App;
