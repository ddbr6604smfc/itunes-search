import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import * as iTunes from './iTunes';
import App from './components/App';

ReactDOM.render(<App iTunes={iTunes} />, document.getElementById('root'));
