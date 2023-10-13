/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const IconText = ({
  name,
  size,
  text,
  bodyTextStyles,
  color,
}: {
  name: string;
  size: number;
  text: string;
  bodyTextStyles: any;
  color: string;
}) => {
  const {textTheme, container} = styles;
  return (
    <View style={container}>
      <Icon name={name} size={size} color={color} />
      <Text style={[textTheme, bodyTextStyles]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
  },
});

export default IconText;
