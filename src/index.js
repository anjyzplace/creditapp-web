import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
//import './js/jquery-3.2.1';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap.min.css';
//import './js/bootstrap.min.js';
import './index.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
