import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var data = [{
  id: 1,
  token: 'bank',
  tokenImg: 'bank',
  balance: 150000
  },
  {
  id: 2,
  token: 'hat',
  tokenImg: 'hat',
  balance: 1500
  },
  {
  id: 1,
  token: 'trex',
  tokenImg: 'trex',
  balance: 1500
  },
  ]

ReactDOM.render(
  <App data={data}/>,
  document.getElementById('app')
);