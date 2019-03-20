import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import './index.css';

const Index = () => (
  <App />
);

ReactDOM.render(<Index />, document.getElementById('root'));

if (module.hot) {
  // used for hot module replacement during development:
  module.hot.accept();
}
