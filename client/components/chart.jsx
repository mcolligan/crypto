import React from 'react';
import axios from 'axios';

class Chart extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    fetch('/chart')
  }

  render() {
    return (
      <div>
        <h3>Charts Here</h3>
      </div>
    )
  }
}

export default Chart;