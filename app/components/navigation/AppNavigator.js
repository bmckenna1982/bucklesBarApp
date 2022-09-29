import { View, StyleSheet } from 'react-native';
import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { NavigationContainer } from '@react-navigation/native';

import BottlesList from '../Lists/BottlesList';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import BottleCard from '../screens/BottleCard';
import AddBottle from '../screens/AddBottle';
import useBottles from '../../hooks/useBottles';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  const {
    bottles,
    inventory,
    latestBottles,
    categoryBottles,
    bestBottles,
    categories
   } = useBottles()

  return (
    // <NavigationContainer>
    <Tab.Navigator
        initialRouteName='Home'
        shifting={true}        
        tabBarOptions={{
            style: styles.container,
            activeTintColor: 'red',
            inactiveTintColor: 'black'            
        }}
  >
    <Tab.Screen
      name="Home"
      component={Home}      
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Add"
      component={AddBottle}      
      options={{
        labeled: false,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="plus" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Inventory"
      component={BottlesList}
      initialParams={{inventory: bottles}}
      options={{
        tabBarLabel: 'Inventory',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bottle-tonic" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
        // <Stack.Navigator>
        //     <Stack.Screen name='Home' component={Home}/>
        //     <Stack.Screen name='BottlesList' component={BottlesList}/>
        //     <Stack.Screen name='BottleCard' component={BottleCard}/>
        // </Stack.Navigator>
    // </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 90
    },
    shadow: {
        shadowColor: 'Grey',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default AppNavigator