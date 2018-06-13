import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@icon/font-awesome/font-awesome.css';
import '../node_modules/@fortawesome/fontawesome-free-webfonts'



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
