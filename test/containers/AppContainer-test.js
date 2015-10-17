import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import jsdomReact from '../helpers/jsdomReact';
import AppContainer from '../../src/containers/AppContainer';

describe('App container', () => {
  jsdomReact();

  it('should receive new results after a search', (done) => {
    const props = {
      search: () => Promise.resolve([1, 2, 3]),
    };

    const renderer = TestUtils.createRenderer();
    renderer.render(<AppContainer {...props} />);

    const output = renderer.getRenderOutput();
    output.props.search().then(() => {
      const updatedOutput = renderer.getRenderOutput();
      expect(updatedOutput.props.results.length).toBe(3);
      done();
    });
  });
});
