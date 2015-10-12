import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import jsonp from 'jsonp-p';

const search = query =>
  jsonp(`https://itunes.apple.com/search?media=music&entity=song&limit=20&term=${query}`)
    .then(response => response.results);


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: [],
    };
  }

  onSubmit = (event) => {
    event.preventDefault();

    const query = this.state.query.trim();

    if (query) {
      search(this.state.query).then(results => {
        this.setState({ results });
      });
    }

    const input = ReactDOM.findDOMNode(this.refs.search);
    input.blur();
  }

  onChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { query, results } = this.state;

    return (
      <div>
        <form action="" onSubmit={this.onSubmit}>
          <input
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
            spellCheck="false"
            type="search"
            ref="search"
            placeholder="Search iTunes"
            value={query}
            onChange={this.onChange}
          />
        </form>

        <h1>Search results for {query}:</h1>

        <ul>
          {
            results.map(result =>
              <li key={result.trackId}>
                <img src={result.artworkUrl60} alt={result.trackName} />
                <p>{result.trackName}</p>
                <p>{result.artistName} - {result.collectionName}</p>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}
