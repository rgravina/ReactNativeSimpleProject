import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/App';

jest.mock('Linking', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn(),
  }
});

it('renders main App component', () => {
  const tree = renderer.create(<App />);
});
