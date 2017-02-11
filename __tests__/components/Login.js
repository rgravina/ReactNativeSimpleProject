import Login from '../../src/components/Login';
import React from 'react';
import { Title } from 'native-base';
import { shallow } from 'enzyme';

it('renders Login component', () => {
  const component = shallow(<Login />);
  expect(component.find(Title).length).toEqual(1);
});
