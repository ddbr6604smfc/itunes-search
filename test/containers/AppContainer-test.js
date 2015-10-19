import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AppContainer from '../../src/containers/AppContainer';

describe('App container', () => {
  it('should receive new results after a search', (done) => {
    const API = {
      search: () => Promise.resolve([1, 2, 3]),
    };

    const renderer = TestUtils.createRenderer();
    renderer.render(<AppContainer API={API} />);

    const output = renderer.getRenderOutput();
    output.props.search().then(() => {
      const updatedOutput = renderer.getRenderOutput();
      expect(updatedOutput.props.results.length).toBe(3);
      done();
    });
  });
});
