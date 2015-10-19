import React, { Component, PropTypes } from 'react';
import App from '../components/App';

export default class AppContainer extends Component {
  static propTypes = {
    API: PropTypes.shape({
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
    return this.props.API.search(query).then(results => {
      this.setState({ results });
    });
  }

  render() {
    return (
      <App results={this.state.results} search={this.onSearch} />
    );
  }
}
