import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class Search extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();

    const query = this.state.query.trim();

    if (query) {
      this.props.onSearch(query);
      ReactDOM.findDOMNode(this.refs.search).blur();
    }
  }

  onChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    return (
      <form action="" onSubmit={this.onSubmit}>
        <input
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          spellCheck="false"
          type="search"
          ref="search"
          placeholder="Search iTunes"
          value={this.state.query}
          onChange={this.onChange}
        />
      </form>
    );
  }
}
