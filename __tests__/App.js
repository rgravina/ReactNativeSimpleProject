import App from '../src/App.js';

import React from 'react';
import renderer from 'react-test-renderer';

it('renders main App component', () => {
  const tree = renderer.create(<App />);
});
