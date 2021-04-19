import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode={'none'}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Cart" component={Cart}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;