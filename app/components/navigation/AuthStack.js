import { View, StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ConfirmEmail from '../screens/ConfirmEmail';
import ForgotPassword from '../screens/ForgotPassword';
import NewPassword from '../screens/NewPassword';

const Stack = createNativeStackNavigator();

const AuthStack = ({children}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='ConfirmEmail' component={ConfirmEmail} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        <Stack.Screen name='NewPassword' component={NewPassword} />
        {/* <Stack.Screen name='AppNavigator' component={AppNavigator} /> */}
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default AuthStack