import React, { Component, PropTypes } from 'react';
import Search from './Search';
import Result from './Result';

export default class App extends Component {
  static propTypes = {
    iTunes: PropTypes.shape({
      search: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };
  }

  onSearch = (query) => {
    this.props.iTunes.search(query).then(results => {
      this.setState({ results });
    });
  }

  render() {
    return (
      <div>
        <Search onSearch={this.onSearch} />
        <ul>
          {
            this.state.results.map(result =>
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
