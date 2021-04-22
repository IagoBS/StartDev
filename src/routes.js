import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './pages/Main';
import SingIn from './pages/SingIn'
import SingUp from './pages/SingUp'
const Stack = createStackNavigator();

const App = (SingedIn = false) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Tab.Screen name="Login" component={SingIn} />
        <Tab.Screen name="Register" component={SingUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
