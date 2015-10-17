import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import API from './API';
import AppContainer from './containers/AppContainer';

ReactDOM.render(<AppContainer { ...API } />, document.getElementById('root'));
