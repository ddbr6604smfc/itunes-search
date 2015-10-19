import React, { Component, PropTypes } from 'react';
import Search from './Search';
import Result from './Result';

export default class App extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired,
    results: PropTypes.array.isRequired,
  };

  render() {
    const { search, results } = this.props;

    const resultsListStyle = {
      margin: '0',
      padding: '0 15px',
      listStyle: 'none',
    };

    return (
      <div>
        <Search onSearch={search} />
        <ul style={resultsListStyle}>
          {
            results.map(result =>
              <li key={result.trackId}>
                <Result {...result} />
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}
