import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import TemperatureUnitSelector from '../../src/components/TemperatureUnitSelector';
import TemperatureUnit from '../../src/components/TemperatureUnit';

describe(TemperatureUnitSelector, () => {
  it('renders component with teperature and unit selectors', () => {
    const component = shallow(<TemperatureUnitSelector/>);
    expect(component.contains(<TemperatureUnit selected={true} text="°C"/>)).toEqual(true);
    expect(component.contains(<TemperatureUnit selected={false} text="°F"/>)).toEqual(true);
  });
});
