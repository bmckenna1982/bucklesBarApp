import { View, StyleSheet, Image, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';

import Screen from '../common/Screen';
import Logo from '../../../assets/logo.png';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import Title from '../common/Title';
import SocialSignIn from '../common/SocialSignIn';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const ConfirmEmail = () => {    
    const { control, handleSubmit, formState: {error} } = useForm();
    const navigation = useNavigation();

    const onConfirmPress = () => {
        console.log('sign in pressed');
        navigation.navigate('AppNavigator');
    }
    
    const onBackPress = () => {
        console.log('sign in pressed');
        navigation.navigate('SignIn');
    }
    
    const onResendPress = () => {
        console.log('sign in pressed');
        //resend the code
    }
  return (
    <Screen>
      <Title size={20} paddingVertical={15}>Confirm your email</Title>
      {/* <CustomInput placeholder='userName'/> */}
      <CustomInput 
        name='code'
        placeholder='Enter confimation code'
        control={control}
        rules={{
          required: 'Enter your confirmation code'
        }}
      />
      <CustomButton onPress={handleSubmit(onConfirmPress)} text='Confirm'/>
      {/* <SocialSignIn></SocialSignIn> */}
      {/* <View> */}
        <CustomButton onPress={onResendPress} text="Resend code" type='SECONDARY'/>
        <CustomButton onPress={onBackPress} text="Back to sign In" type='SECONDARY'/>
      {/* </View> */}
        
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

export default ConfirmEmail