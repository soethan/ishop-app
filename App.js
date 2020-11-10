import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import SettingsList from './components/SettingsList';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const navOptionHandler = () => ({ headerShown: false });

const ProductStack = () => {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen name="Products" component={ProductsList} options={navOptionHandler} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} options={navOptionHandler} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#333',
        labelPosition: "beside-icon"
      }}>
        <Tab.Screen name="Home" component={ProductStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Settings" component={SettingsList}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="settings" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
