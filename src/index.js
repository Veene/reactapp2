import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
// import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';


ReactDOM.render(
    <App />, document.getElementById('root'));
registerServiceWorker();
