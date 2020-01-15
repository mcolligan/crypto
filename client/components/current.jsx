import React from 'react';
import moment from 'moment';

class Current extends React.Component {
  constructor() {
    super();
    this.state = {
      current: '',
      rate: '',
      updated: '',
      move: '',
      loaded: false
    }
  }

  componentDidMount() {
    fetch('/current').then(res => res.json())
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
        this.setState({
          current: (curr - stor).toFixed(2),
          rate: curr,
          update: data.time.updated,
          move: mov,
          loaded: true
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.loaded &&
          <div className="container">
            <div className="card">
              <h5 className="card-title"><u>Current Rate:</u></h5>
              <h2 className="card-text">$ {this.state.rate} (USD)</h2>
              {this.state.move === '+' &&
                <h1 className="card-text text-left" style={{ color: 'green' }}>&#8682; ${this.state.current}</h1>
              }
              {this.state.move === '-' &&
                <h1 className="card-text text-left" style={{ color: 'red' }}>&#8681; ${this.state.current}</h1>
              }
              {this.state.move === '=' &&
                <h1 className="card-text text-left">= No Movement Since Last Update</h1>
              }
              <p className="card-text">Updated: {moment().startOf(this.state.update).fromNow()}</p>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Current;