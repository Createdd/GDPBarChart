import React from 'react';
import ReactDOM from 'react-dom';
import Header from './HeaderC.js';
import Footer from './FooterC.js';

class Main extends React.Component {
  componentsDidMount() {
    const url = 'https://www.quandl.com/api/v1/datasets/ODA/AUT_NGDPD.json?column=1';
    d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json', (err, json) => {
      if(err) {
        return console.error('Not able to get JSON');
      }
      console.log(json.data);
      const data = json.data;
      const quarters = dataset.map((year) => {
        return year[0];
      });
      const GDPs = dataset.map((year) => {
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
  };
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
