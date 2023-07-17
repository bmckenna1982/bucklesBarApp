import { View, StyleSheet, ActivityIndicator } from 'react-native';
import React, {useContext} from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './AppNavigator';
import AuthStack from './AuthStack';

import { AuthContext } from '../../context/AuthContext';

const AppNav = ({children}) => {
    const {isLoading, userToken} = useContext(AuthContext);
    
    if(isLoading) {
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={'large'} />
        </View>
    }
  
    return (
        <NavigationContainer>
            { userToken !== null ? <AppNavigator /> : <AuthStack />}       
        </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default AppNav