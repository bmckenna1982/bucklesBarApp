import { View, StyleSheet, Image, useWindowDimensions } from 'react-native';
import React from 'react';

import Screen from '../common/Screen';
import Logo from '../../../assets/logo.png';
import CustomInput from '../common/CustomInput';

const SignIn = () => {
    const { height } = useWindowDimensions();
  return (
    <Screen>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='center'></Image>
      <CustomInput />
    </Screen>
  )
}

const styles = StyleSheet.create({
    container: {        
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxheight: 200
    }
})

export default SignIn