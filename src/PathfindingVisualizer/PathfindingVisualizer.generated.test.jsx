import renderer from 'react-test-renderer';
import React, { Component } from 'react';
import Node from './Node/Node';

import { dijkstra, getNodesInShortestPathOrder } from './algorithms/dijkstra';
import PathfindingVisualizer from './PathfindingVisualizer';

jest.mock('./Node/Node');
jest.mock('./PathfindingVisualizer.css');
jest.mock('./algorithms/dijkstra');

const renderTree = tree => renderer.create(tree);
describe('<PathfindingVisualizer>', () => {
  it('should render component', () => {
    expect(renderTree(<PathfindingVisualizer 
    />).toJSON()).toMatchSnapshot();
  });
  
});