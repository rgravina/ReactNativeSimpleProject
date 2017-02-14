import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import TemperatureUnit from '../../src/components/TemperatureUnit';

describe(TemperatureUnit, () => {
  it('renders unit white when selected', () => {
    const component = shallow(<TemperatureUnit selected={true} text="°C"/>);
    expect(component.prop('style').color).toEqual('white');
    expect(component.contains("°C")).toEqual(true);
  });

  it('renders unit darkgray when not selected', () => {
    const component = shallow(<TemperatureUnit selected={false} text="°C"/>);
    expect(component.prop('style').color).toEqual('darkgray');
    expect(component.contains("°C")).toEqual(true);
  });
});
