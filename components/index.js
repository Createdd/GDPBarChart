import React from 'react';
import ReactDOM from 'react-dom';
import Header from './HeaderC.js';
import Footer from './FooterC.js';
import * as d3 from "d3";
import * as c3 from "c3";
const url = 'https://www.quandl.com/api/v1/datasets/ODA/AUT_NGDPD.json?column=1';

class Main extends React.Component {
  componentDidMount() {
    d3.json(url, (err, json) => {
      if(err) {
        return console.warn('Not able to get JSON');
      }
      const data = json.data;
      const quarters = data.map((year) => {
        return year[0];
      });
      const GDPs = data.map((year) => {
        return year[1];
      });
      const chart = c3.generate({
        bindto: '#chart',
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
              fit: true,
              format: '%b %y'
            }
          },
          y: {
            label: {
              text: 'Gross Domestic Product, Austria'
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
      <div className="container">
        <div id="chart" />
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
