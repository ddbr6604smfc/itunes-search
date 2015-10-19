import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AppContainer from '../../src/containers/AppContainer';

function setup() {
  const props = {
    API: {
      search: expect.createSpy().andReturn(Promise.resolve([1, 2, 3])),
    },
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<AppContainer { ...props } />);

  const output = renderer.getRenderOutput();

  return {
    props,
    renderer,
    output,
  };
}

describe('App container', () => {
  it('should search', (done) => {
    const { props, output } = setup();

    output.props.search('future').then(() => {
      expect(props.API.search.calls[0].arguments[0]).toBe('future');
      done();
    });
  });
});
