import renderer from 'react-test-renderer';

import App from './App';

jest.mock('./App.css');
jest.mock('./PathfindingVisualizer/PathfindingVisualizer');

const renderTree = tree => renderer.create(tree);
describe('<App>', () => {
  it('should render component', () => {
    expect(renderTree(<App />)
    .toJSON())
    .toMatchSnapshot();
  });
  
});