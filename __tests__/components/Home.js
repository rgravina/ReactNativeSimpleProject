import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import Home from '../../src/components/Home';

describe('home', () => {
  it('renders Home component with teperature and unit selectors', () => {
    const component = shallow(<Home />);
    expect(component.contains("°C")).toEqual(true);
    expect(component.contains("°F")).toEqual(true);
  });
});
