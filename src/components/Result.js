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

    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: '1px solid #E1E1E1',
    };

    const artworkStyle = {
      width: '60px',
      marginRight: '10px',
    };

    const bodyStyle = {
      flex: '1',
    };

    const textStyle = {
      margin: '0',
      width: '90%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    };

    const titleStyle = {
      ...textStyle,
      fontSize: '0.95em',
    };

    const infoStyle = {
      ...textStyle,
      color: 'gray',
      fontSize: '0.78em',
    };

    return (
      <div style={containerStyle}>
        <img src={artworkUrl100} style={artworkStyle} />
        <div style={bodyStyle}>
          <p style={titleStyle}>{trackName}</p>
          <p style={infoStyle}>{artistName} - {collectionName}</p>
        </div>
      </div>
    );
  }
}
