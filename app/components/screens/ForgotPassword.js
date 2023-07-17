import { View, StyleSheet, Image, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';

import Screen from '../common/Screen';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import Title from '../common/Title';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
    const {userName, setUserName} = useState('');
    
    const navigation = useNavigation();

    const onBackPress = () => {
        console.log('Back to sign in pressed');
        navigation.navigate('SignIn')
    }
    
    const onSendPress = () => {
        console.log('send pressed');
        // send reset code
        navigation.navigate('NewPassword')
    }
  return (
    <Screen>
      <Title size={20} paddingVertical={15}>Reset your password</Title>
      <CustomInput placeholder='Enter email' value={userName} setValue={setUserName}/>
      <CustomButton onPress={onSendPress} text='Send'/>
      {/* <SocialSignIn></SocialSignIn> */}
      <CustomButton onPress={onBackPress} text="Back to sign in" type='TERTIARY'/>
        
    </Screen>
  )
}

const styles = StyleSheet.create({
    logo: {
        width: '70%',
        alignItems: 'center',
        maxWidth: 300,
        maxheight: 200
    }
})

export default ForgotPassword