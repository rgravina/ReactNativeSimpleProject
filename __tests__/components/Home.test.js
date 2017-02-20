import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import Home from '../../src/components/Home';
import TemperatureUnitSelector from '../../src/components/TemperatureUnitSelector';

describe('Home', () => {
  it('renders TemperatureUnitSelector', () => {
    const handler = () => {};
    const component = shallow(<Home fahrenheit={true} onSelectUnit={handler}/>);
    expect(component.contains(<TemperatureUnitSelector fahrenheit={true} onSelectUnit={handler}/>)).toEqual(true);
  });
});
