import React from 'react';
import CurrentWeather from './src/screens/Weather';
import City from './src/screens/City';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="City">
        <Stack.Screen name="City" component={City} />
        <Stack.Screen name="CurrentWeather" component={CurrentWeather} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
