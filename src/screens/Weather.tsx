/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {WeatherProp} from '../../types/List-types';
import ListItems from '../components/ListItems';

const weather_data = [
  {
    dt: 1697025600,
    temp: 291.95,
    feels_like: 290.9,
    temp_min: 291.95,
    temp_max: 297.14,
    pressure: 1021,
    sea_level: 1021,
    grnd_level: 938,
    humidity: 39,
    temp_kf: -5.19,
  },
  {
    dt: 1697036400,
    temp: 293.32,
    feels_like: 292.46,
    temp_min: 293.32,
    temp_max: 296.06,
    pressure: 1021,
    sea_level: 1021,
    grnd_level: 937,
    humidity: 41,
    temp_kf: -2.74,
  },
  {
    dt: 1697047200,
    temp: 290.11,
    feels_like: 289.45,
    temp_min: 289.19,
    temp_max: 290.11,
    pressure: 1021,
    sea_level: 1021,
    grnd_level: 936,
    humidity: 61,
    temp_kf: 0.92,
  },
];

const CurrentWeather = () => {
  const renderItem = ({item}: {item: WeatherProp}) => {
    return (
      <ScrollView>
        <ListItems {...item} />
      </ScrollView>
    );
  };

  const {container, image, List} = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/images/weather.jpg')}
        style={image}>
        <FlatList
          data={weather_data}
          renderItem={renderItem}
          keyExtractor={item => item.dt.toString()}
          style={List}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  content: {},
  text: {
    color: 'white',
  },
  List: {
    marginTop: 20,
  },
  image: {
    flex: 1,
  },
});

export default CurrentWeather;
