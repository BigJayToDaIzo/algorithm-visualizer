import renderer from 'react-test-renderer';
import React, { Component } from 'react';

import Node from './Node';

jest.mock('./Node.css');

const renderTree = tree => renderer.create(tree);
describe('<Node>', () => {
  it('should render component', () => {
    expect(renderTree(<Node 
    />).toJSON()).toMatchSnapshot();
  });
  
});