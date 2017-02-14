import React, { Component } from 'react';
import { View, Text } from 'react-native';

import TemperatureUnit from './TemperatureUnit';

export default (props) => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <TemperatureUnit selected={!props.fahrenheit} text="°C"/>
      <TemperatureUnit selected={props.fahrenheit === true} text="°F"/>
    </View>
  );
}
