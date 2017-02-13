import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import TemperatureUnitSelector from '../../src/components/TemperatureUnitSelector';

describe('home', () => {
  it('renders component with teperature and unit selectors', () => {
    const component = shallow(<TemperatureUnitSelector/>);
    expect(component.contains("°C")).toEqual(true);
    expect(component.contains("°F")).toEqual(true);
  });

  xit('renders celcius white when selected');
  xit('renders fahrenheit white when selected');
  xit('calls onTemperateUnitChanged when unit is tapped.');
});
