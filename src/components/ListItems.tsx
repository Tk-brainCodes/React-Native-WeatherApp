/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WeatherProp} from '../../types/List-types';

const ListItems: React.FC<WeatherProp> = props => {
  const {
    dt,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    sea_level,
    humidity,
    grnd_level,
    temp_kf,
  } = props;

  const {items} = styles;

  return (
    <View style={items}>
      <Text>{dt}</Text>
      <Text>Main: {temp}</Text>
      <Text>
        <Text>Feels Like:</Text> <Text>{feels_like}</Text>
      </Text>
      <Text>Minimum Temp: {temp_min}</Text>
      <Text>Maximum Temp: {temp_max}</Text>
      <Text>Pressure: {pressure}</Text>
      <Text>Sea Level: {sea_level}</Text>
      <Text>Humidity: {humidity}</Text>
      <Text>Ground Level: {grnd_level}</Text>
      <Text>Temp in Kelvin: {temp_kf}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 6,
  },
});

export default ListItems;
