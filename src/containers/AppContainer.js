import React, { Component, PropTypes } from 'react';
import App from '../components/App';

export default class AppContainer extends Component {
  static propTypes = {
    search: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };
  }

  onSearch = (query) => {
    return this.props.search(query).then(results => {
      this.setState({ results });
    });
  }

  render() {
    return (
      <App results={this.state.results} search={this.onSearch} />
    );
  }
}
