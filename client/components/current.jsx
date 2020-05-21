import React from 'react';
import moment from 'moment';

class Current extends React.Component {
  constructor() {
    super();
    this.state = {
      current: '',
      rate: '',
      move: '',
      loaded: false,
    };
  }

  componentDidMount() {
    fetch('/current')
      .then((res) => res.json())
      .then((data) => {
        let stor = localStorage.getItem('previous');
        let curr = parseFloat(data.bpi['USD'].rate.replace(/,/g, ''));
        let mov;
        // Set the first load
        if (!stor) {
          localStorage.setItem('previous', curr);

          stor = curr;
        }
        if (curr > stor) {
          mov = '+';
        } else if (curr < stor) {
          mov = '-';
        } else {
          mov = '=';
        }
        localStorage.setItem('previous', curr);
        this.setState({
          current: (curr - stor).toFixed(2),
          rate: curr.toFixed(2),
          move: mov,
          loaded: true,
        });
      });
  }

  render() {
    console.log(this.state.rate);
    return (
      <div>
        {this.state.loaded && (
          <div className='container'>
            <div className='card'>
              <h5 className='card-title'>
                <u>Current Rate:</u>
              </h5>
              <h2 className='card-text'>$ {this.state.rate} (USD)</h2>
              {this.state.move === '+' && (
                <h1 className='card-text text-left' style={{ color: 'green' }}>
                  &#8682; ${this.state.current}
                </h1>
              )}
              {this.state.move === '-' && (
                <h1 className='card-text text-left' style={{ color: 'red' }}>
                  &#8681; ${this.state.current}
                </h1>
              )}
              {this.state.move === '=' && (
                <h1 className='card-text text-left'>
                  <em>No Movement Since Last Update</em>
                </h1>
              )}
              <p className='card-text'>
                Last Update on: {moment().format('MMMM Do YYYY, h:mm:ss a')}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Current;
