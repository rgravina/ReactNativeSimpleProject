import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import Home from '../../src/components/Home';

describe('home', () => {
  it('renders Home component', () => {
    const component = shallow(<Home />);
  });
});
