import React from 'react';
import Chart from 'chart.js';

class ChartLines extends React.Component {

  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }


  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, {
      type: "line",
      data: {
        labels: [...this.props.info.day],
        datasets: [
          {
          label: "Close Price",
          data: [...this.props.info.close],
          borderColor: "#F5B041",
          pointBackgroundColor: "#17202A",
          backgroundColor: [
            "#73C6B6"
          ]
          }
        ]
      },
      options: {

      }
    });
  }

  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef}/>
      </div>
    )
  }

}

export default ChartLines;