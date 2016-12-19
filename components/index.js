import React from 'react';
import ReactDOM from 'react-dom';
import Header from './HeaderC.js';
import Footer from './FooterC.js';

class Main extends React.Component {
  render () {
    return (
      <div className="container">
        everything is working
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
