import { View, StyleSheet, Image, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';

import Screen from '../common/Screen';
import Logo from '../../../assets/logo.png';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import Title from '../common/Title';
import SocialSignIn from '../common/SocialSignIn';
import { useNavigation } from '@react-navigation/native';

import * as Google from 'expo-auth-session/providers/google';

import { useForm } from 'react-hook-form';
import barAPI from '../../api/barAPI';

const SignUp = () => {
  const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/  
  
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '836230445175-u36uc4g31hsjipgivepn5r3e7a7desh9.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });
    const navigation = useNavigation();
    const { control, handleSubmit, formState: {error}, watch } = useForm();
    const pwd = watch('password');

    const onRegisterPress = (data) => {
        console.log('Register pressed');
        const { user_name, email, password } = data;
        try {
          const response = barAPI.postUser({
            user_name,
            email,
            password
          })
        } catch (error) {
          
        }
        console.log('response', response)
        
        navigation.navigate('ConfirmEmail')
    }
    
    const onSignInPress = () => {
        console.log('sign in pressed');
        navigation.navigate('SignIn')
    }
  return (
    <Screen>
      <Title size={20} paddingVertical={15}>Create an account</Title>
      <CustomInput
        name='user_name'
        placeholder='Username'
        control={control}
        rules={{
          required: 'Username is required',
          minLength: {value: 5, message: 'Username must be a minimum 5 character'},
          maxLength: {value: 25, message: 'Username must be less than 25 character'}
        }}
      />
      <CustomInput
        name='email'
        placeholder='Email'
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$',
            message: 'Must be a valid email'
          }
        }}
      />
      <CustomInput 
        name='password' 
        placeholder='Password' 
        control={control} 
        rules={{
          required: 'Password is required', 
          minLength: {value: 8, message: 'Passwords must be a minimum 8 character'},
          pattern: {value: REGEX_UPPER_LOWER_NUMBER_SPECIAL, message: 'Password must contain 1 upper case, lower case, number and special character'}
        }} 
        secureTextEntry
      />
      <CustomInput
        name='password-repear'
        placeholder='Confirm Password'
        control={control}
        rules={{          
          validate: value => value === pwd || 'Passwords do not match'          
        }}
        secureTextEntry/>
      <CustomButton onPress={handleSubmit(onRegisterPress)} text='Register'/>
      <SocialSignIn></SocialSignIn>
      <CustomButton onPress={handleSubmit(onSignInPress)} text="Already have an account? Sign In" type='TERTIARY'/>
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

export default SignUp