import React from 'react';
import renderer from 'react-test-renderer';

import App from '../src/App';

describe('App', () => {
  it('renders main App component', () => {
    const tree = renderer.create(<App />);
  });
});
