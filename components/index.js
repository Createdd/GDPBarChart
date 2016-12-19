import React from 'react';
import ReactDOM from 'react-dom';
import Header from './HeaderC.js';
import Footer from './FooterC.js';
import * as d3 from "d3";
import * as c3 from "c3";
const url = 'https://www.quandl.com/api/v3/datasets/ODA/AUT_NGDPD.json?api_key=PANWYzB7zFkKzJ73jqjD';

class Main extends React.Component {
  componentDidMount() {
    d3.json(url, (err, json) => {
      if(err) {
        return console.warn('Not able to get JSON');
      }
      const data = json.dataset.data;
      const quarters = data.map((year) => {
        return year[0];
      });
      const GDPs = data.map((year) => {
        return year[1];
      });
      const chart = c3.generate({
        bindto: '#chart',
        padding: {
          top: 50
        },
        color: {
          pattern: ['#009688']
        },
        grid: {
          x: {
              show: true
          },
          y: {
              show: true
          }
        },
        data: {
          x: 'x',
          columns: [
            ['x'].concat(quarters),
            ['Gross Domestic Product, Austria'].concat(GDPs)
          ],
          type: 'bar',
        },
        axis: {
          x: {
            type: 'timeseries',
            tick: {
              fit: false,
              format: '%m-%Y'
            }
          },
          y: {
            label: {
              text: 'Austria GDP at Current Prices, USD Billions'
            },
            tick: {
              format: d3.format('$')
            }
          }
        }
      })
    })
  }
  render () {
    return (
      <div className="container valign-wrapper">
        <div className="container valign" id="chart" />
      </div>
    );
  }
}


ReactDOM.render(
  <Header />, document.getElementById('header')
);
ReactDOM.render(
    <Footer />, document.getElementById('footer')
);
ReactDOM.render(
    <Main />, document.getElementById('main')
);
