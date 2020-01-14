import React from 'react';
import ChartLines from './chartLines.jsx';

class Chart extends React.Component {
  constructor() {
    super();
    this.state = {
      day: [],
      close: [],
      loaded: false
    }
  }

  componentDidMount() {
    fetch('/chart').then(res => res.json())
      .then((data) => {
        this.setState({
          day: Object.keys(data.bpi),
          close: Object.values(data.bpi),
          loaded: true
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.loaded &&
          <div>
            <h3>Charts Here</h3>
            <ChartLines info={this.state} />
          </div>
        }
      </div>
    )
  }
}

export default Chart;