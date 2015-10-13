import React, { Component} from 'react';
import jsonp from 'jsonp-p';
import Search from './Search';
import Result from './Result';

const search = query =>
  jsonp(`https://itunes.apple.com/search?media=music&entity=song&limit=20&term=${query}`)
    .then(response => response.results);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };
  }

  onSearch = (query) => {
    event.preventDefault();

    search(query).then(results => {
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
