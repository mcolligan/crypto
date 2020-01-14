import React from 'react';
import ReacDOM from 'react-dom';

import Chart from './components/chart.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi there</h1>
        <Chart />
      </div>
    )
  }
}

ReacDOM.render(<App />, document.getElementById('root'));