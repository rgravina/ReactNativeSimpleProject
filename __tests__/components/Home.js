import React from 'react';
import { Title } from 'native-base';
import { shallow } from 'enzyme';

import Home from '../../src/components/Home';

describe('home', () => {
  it('renders Home component', () => {
    const component = shallow(<Home />);
  });
});
