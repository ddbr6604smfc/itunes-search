import React, { Component } from 'react';
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
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="search"
            value={query}
            onChange={this.onChange}
          />
          <input type="submit" value="Search" />
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
