import 'jest';
import * as React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import App from '../src/App';

describe('App.tsx', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
});
