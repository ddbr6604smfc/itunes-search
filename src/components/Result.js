import React, { Component, PropTypes } from 'react';

export default class Result extends Component {
  static propTypes = {
    artworkUrl100: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
  };

  render() {
    const { artworkUrl100, trackName, artistName, collectionName } = this.props;

    return (
      <div>
        <img src={artworkUrl100} />
        <p>{trackName}</p>
        <p>{artistName} - {collectionName}</p>
      </div>
    );
  }
}
