import React from 'react';

class Chart extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    fetch('/chart').then(res => res.json())
    .then((data) => {
      console.log(data);
    })
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