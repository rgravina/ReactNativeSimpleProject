import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import TemperatureUnitSelector from '../../src/components/TemperatureUnitSelector';
import TemperatureUnit from '../../src/components/TemperatureUnit';

describe('TemperatureUnitSelector', () => {
  it('renders component with teperature and unit selectors', () => {
    const handler = () => {};
    const component = shallow(<TemperatureUnitSelector onSelectUnit={handler}/>);
    expect(component.contains(<TemperatureUnit onSelectUnit={handler} selected={true} text="°C" unit='c'/>)).toEqual(true);
    expect(component.contains(<TemperatureUnit onSelectUnit={handler} selected={false} text="°F" unit='f'/>)).toEqual(true);
  });
});
