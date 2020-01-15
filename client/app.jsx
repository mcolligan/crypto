import React from 'react';
import ReacDOM from 'react-dom';

import Chart from './components/chart.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
        <h1 className="display-4">BitCoin Tracker</h1>
        <p>Updates on every refresh.....</p>
        </div>
        <Chart />
      </div>
    )
  }
}

ReacDOM.render(<App />, document.getElementById('root'));