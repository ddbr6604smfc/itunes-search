import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Search from '../../src/components/Search';

function setup() {
  const props = {
    onSearch: expect.createSpy(),
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<Search {...props} />);

  const output = renderer.getRenderOutput();

  return {
    props,
    renderer,
    output,
  };
}

function setupWithDOM() {
  const props = {
    onSearch: expect.createSpy(),
  };

  const output = TestUtils.renderIntoDocument(<Search {...props} />);
  const formEl = ReactDOM.findDOMNode(output);
  const inputEl = output.refs.search;

  return {
    props,
    output,
    formEl,
    inputEl,
  };
}

describe('Search component', () => {
  it('should render correctly', () => {
    const { output } = setup();
    expect(output.type).toBe('form');
  });

  it('should call onSearch when form is submitted', () => {
    const { props, formEl, inputEl } = setupWithDOM();

    inputEl.value = 'What a Time To Be Alive';
    TestUtils.Simulate.change(inputEl);
    TestUtils.Simulate.submit(formEl);

    expect(props.onSearch.calls[0].arguments[0]).toEqual('What a Time To Be Alive');
  });

  it('should blur the input element after successful search', () => {
    const { formEl, inputEl } = setupWithDOM();

    inputEl.blur = expect.createSpy();

    inputEl.value = '';
    TestUtils.Simulate.change(inputEl);
    TestUtils.Simulate.submit(formEl);

    // input was empty, search failed
    expect(inputEl.blur.calls.length).toBe(0);

    inputEl.value = 'What a Time To Be Alive';
    TestUtils.Simulate.change(inputEl);
    TestUtils.Simulate.submit(formEl);

    // input was full, search successful and input is blurred.
    expect(inputEl.blur.calls.length).toBe(1);
  });
});
