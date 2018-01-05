import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App/';
import registerServiceWorker from './registerServiceWorker';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';


ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
