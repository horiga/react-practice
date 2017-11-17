import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MultiForm from './MultiForm';
//import registerServiceWorker from './registerServiceWorker';

const st = {
  textAlign: 'left',
  padding: '10px'
}

ReactDOM.render(
  <div style={st}><MultiForm /></div>, 
  document.getElementById('root'));
//registerServiceWorker();
