import React, { Component } from 'react';
import { View, Text } from 'react-native';

import TemperatureUnitSelector from './TemperatureUnitSelector';

export default class Home extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: 24,
        flexDirection: 'column',
        backgroundColor: '#171521'
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
          <TemperatureUnitSelector />
        </View>
      </View>
    );
  }
}
