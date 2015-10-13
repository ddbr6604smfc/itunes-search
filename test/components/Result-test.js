import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import jsdomReact from '../helpers/jsdomReact';
import Result from '../../src/components/Result';

describe('Result component', () => {
  jsdomReact();

  it('should render correctly', () => {
    const props = {
      artworkUrl100: 'http://is4.mzstatic.com/image/thumb/Music3/v4/7a/22/64/7a22643b-54d2-3cdd-07bc-05b0401baa4c/UMG_cvrart_00602547616661_01_RGB72_1500x1500_15UMGIM52457.jpg/100x100bb-85.jpg',
      trackName: 'Diamonds Dancing',
      artistName: 'Drake & Future',
      collectionName: 'What a Time To Be Alive',
    };

    const renderer = createRenderer();
    renderer.render(<Result {...props} />);

    const output = renderer.getRenderOutput();
    expect(output.type).toBe('div');

    const [ artwork, trackName, trackInformation ] = output.props.children;
    expect(artwork.props.src).toEqual(props.artworkUrl100);
    expect(trackName.props.children).toEqual(props.trackName);
    expect(trackInformation.props.children).toContain('Drake & Future');
    expect(trackInformation.props.children).toContain('What a Time To Be Alive');
  });
});
