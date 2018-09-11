import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(
    <div className="tc">
        <h1 className="f1">ROBOFRIENDS APP</h1>
        <CardList robots={robots}/>
    </div>, document.getElementById('root'));
registerServiceWorker();
