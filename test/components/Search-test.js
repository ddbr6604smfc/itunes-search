import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Search from '../../src/components/Search';

describe('Search component', () => {
  it('should render correctly', () => {
    const props = {
      onSearch: expect.createSpy(),
    };

    const renderer = TestUtils.createRenderer();
    renderer.render(<Search {...props} />);

    const output = renderer.getRenderOutput();
    expect(output.type).toBe('form');
  });

  it('should call onSearch when form is submitted', () => {
    const props = {
      onSearch: expect.createSpy(),
    };

    const search = TestUtils.renderIntoDocument(<Search {...props} />);
    const searchFormEl = ReactDOM.findDOMNode(search);
    const searchInputEl = search.refs.search;
    searchInputEl.value = 'What a Time To Be Alive';

    TestUtils.Simulate.change(searchInputEl);
    TestUtils.Simulate.submit(searchFormEl);

    expect(props.onSearch.calls[0].arguments[0]).toEqual('What a Time To Be Alive');
  });

  it('should blur the input element after successful search', () => {
    const props = {
      onSearch: expect.createSpy(),
    };

    const search = TestUtils.renderIntoDocument(<Search {...props} />);
    const searchFormEl = ReactDOM.findDOMNode(search);
    const searchInputEl = search.refs.search;
    searchInputEl.blur = expect.createSpy();

    searchInputEl.value = '';
    TestUtils.Simulate.change(searchInputEl);
    TestUtils.Simulate.submit(searchFormEl);

    // input was empty, search failed
    expect(searchInputEl.blur.calls.length).toBe(0);

    searchInputEl.value = 'What a Time To Be Alive';
    TestUtils.Simulate.change(searchInputEl);
    TestUtils.Simulate.submit(searchFormEl);

    // input was full, search successful and input is blurred.
    expect(searchInputEl.blur.calls.length).toBe(1);
  });
});
