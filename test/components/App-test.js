import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import jsdomReact from '../helpers/jsdomReact';
import App from '../../src/components/App';

describe('App component', () => {
  jsdomReact();

  it('should render correctly', () => {
    const props = {
      iTunes: {
        search: () => Promise.resolve([]),
      },
    };

    const renderer = TestUtils.createRenderer();
    renderer.render(<App {...props} />);

    const output = renderer.getRenderOutput();
    expect(output.type).toBe('div');
  });

  it('should search iTunes', () => {
    const searchSpy = expect.createSpy();

    const props = {
      iTunes: {
        search: (query) => {
          searchSpy(query);
          return Promise.resolve([]);
        },
      },
    };

    const app = TestUtils.renderIntoDocument(<App {...props} />);
    app.onSearch('What a Time To Be Alive');
    expect(searchSpy.calls[0].arguments[0]).toBe('What a Time To Be Alive');
  });
});
