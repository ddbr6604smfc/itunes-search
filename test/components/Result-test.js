import expect from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import Result from '../../src/components/Result';

function setup() {
  const props = {
    artworkUrl100: 'http://is4.mzstatic.com/image/thumb/Music3/v4/7a/22/64/7a22643b-54d2-3cdd-07bc-05b0401baa4c/UMG_cvrart_00602547616661_01_RGB72_1500x1500_15UMGIM52457.jpg/100x100bb-85.jpg',
    trackName: 'Diamonds Dancing',
    artistName: 'Drake & Future',
    collectionName: 'What a Time To Be Alive',
  };

  const renderer = createRenderer();
  renderer.render(<Result {...props} />);

  const output = renderer.getRenderOutput();

  return {
    props,
    renderer,
    output,
  };
}

describe('Result component', () => {
  it('should render correctly', () => {
    const { output, props } = setup();
    const [ artwork, body ] = output.props.children;
    const [ trackName, trackInformation ] = body.props.children;

    expect(output.type).toBe('div');
    expect(artwork.props.src).toEqual(props.artworkUrl100);
    expect(trackName.props.children).toEqual(props.trackName);
    expect(trackInformation.props.children).toContain(props.artistName);
    expect(trackInformation.props.children).toContain(props.collectionName);
  });
});
