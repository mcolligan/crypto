import React from 'react';
import ReacDOM from 'react-dom';

import Chart from './components/chart.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <h1>Hi There</h1>
        </div>
        <Chart />
      </div>
    )
  }
}

ReacDOM.render(<App />, document.getElementById('root'));