import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import App from '../../src/components/App';
import Search from '../../src/components/Search';
import Result from '../../src/components/Result';

function setup() {
  const props = {
    search: () => Promise.resolve([]),
    results: [{
      trackId: '9323213',
      artworkUrl100: 'http://is4.mzstatic.com/image/thumb/Music3/v4/7a/22/64/7a22643b-54d2-3cdd-07bc-05b0401baa4c/UMG_cvrart_00602547616661_01_RGB72_1500x1500_15UMGIM52457.jpg/100x100bb-85.jpg',
      trackName: 'Diamonds Dancing',
      artistName: 'Drake & Future',
      collectionName: 'What a Time To Be Alive',
    }],
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<App {...props} />);

  const output = renderer.getRenderOutput();

  return {
    props,
    renderer,
    output,
  };
}

describe('App component', () => {
  it('should render correctly', () => {
    const { output } = setup();
    const [ search, results ] = output.props.children;
    expect(output.type).toBe('div');
    expect(search.type).toBe(Search);
    expect(results.props.children[0].props.children.type).toBe(Result);
  });
});
