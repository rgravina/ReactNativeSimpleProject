import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row'
      }}>
        <Text style={{
          color: 'darkgray',
          paddingLeft: 8
        }}>°C</Text>
        <Text style={{
          color: 'darkgray',
          paddingLeft: 4
        }}>/</Text>
        <Text style={{
          color: 'darkgray',
          paddingLeft: 4
        }}>°F</Text>
      </View>
    );
  }
}
