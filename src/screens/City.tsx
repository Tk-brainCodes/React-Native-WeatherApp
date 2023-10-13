/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
import IconText from '../components/IconText';

const City = () => {
  const {
    container,
    image,
    city,
    country,
    cityText,
    populationWrapper,
    population,
    riseSetWrapper,
    riseSetText,
    rowWrapper,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/images/city.jpg')}
        style={image}>
        <Text style={[city, cityText]}>London</Text>
        <Text style={[country, cityText]}>UK</Text>
        <View style={[populationWrapper, rowWrapper]}>
          <IconText
            name="user"
            size={40}
            color="red"
            text="8000"
            bodyTextStyles={population}
          />
        </View>
        <View style={[riseSetWrapper, rowWrapper]}>
          <IconText
            name="sunrise"
            size={40}
            color="white"
            text="10:46:57am"
            bodyTextStyles={riseSetText}
          />
          <IconText
            name="sunset"
            size={40}
            color="white"
            text="9:45:89pm"
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    flex: 1,
  },
  city: {
    fontSize: 40,
  },
  country: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  population: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default City;
