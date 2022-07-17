import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FrontScreen from './Views/FrontScreen';
import Couples from './Views/CouplesGameScreen';
import Friends from './Views/FriendsGameScreen';
import AddOwn from './Views/AddOwn';
import Another from './app/components/Another';
import ToastManager, {Toast} from 'toastify-react-native';

const App = () => {
  const Stack = createNativeStackNavigator();

  const MyTheme = {
    dark: true,
    colors: {
      primary: '#bd06d1',
      background: 'black',
      card: '#8a0099',
      text: 'white',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <ToastManager />
      <Stack.Navigator>
        <Stack.Screen
          name="Front"
          component={FrontScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Couples"
          component={Couples}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Friends"
          component={Friends}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Add"
          component={AddOwn}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
