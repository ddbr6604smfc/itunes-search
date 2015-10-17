import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { search } from './iTunes';
import AppContainer from './containers/AppContainer';

ReactDOM.render(<AppContainer search={search} />, document.getElementById('root'));
