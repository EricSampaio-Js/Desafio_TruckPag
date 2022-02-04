import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Routers } from 'react-router-dom'
import App from './App';

ReactDOM.render(
  <Routers>
    <App />
  </Routers>,
  document.getElementById('root')
)