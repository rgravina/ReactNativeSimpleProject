import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default (props) => {
  return (
      <Text style={{
        color: props.selected ? 'white' : 'darkgray',
        paddingLeft: 8,
      }} onPress={props.onSelectUnit}>{props.text}</Text>
  );
}
