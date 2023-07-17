import { View, StyleSheet, Image, useWindowDimensions, TextInput } from 'react-native';
import React, { useContext, useState } from 'react';

import Screen from '../common/Screen';
import Logo from '../../../assets/logo.png';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import SocialSignIn from '../common/SocialSignIn';
import { useNavigation } from '@react-navigation/native';

import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthContext';
import barAPI from '../../api/barAPI';

const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/

const SignIn = () => {
    // const {userName, setUserName} = useState('');
    // const {password, setPassword} = useState('');
    const { login } = useContext(AuthContext);
    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const { control, handleSubmit, formState: {errors} } = useForm();
    
    // const onSignInPress = async (data) => {
    //   login
        // console.log('sign in data', data)
        // const {user_name, password} = data;        
        //  try {
        //   const response = await barAPI.login({
        //     user_name, 
        //     password
        //   })
        //   navigation.navigate('AppNavigator')
        // } catch (error) {
        //   console.log(error)
        // }
        // console.log('sign in response', response)        
    // }
    const onForgotPasswordPress = () => {
        console.log('Forgot password pressed')
        navigation.navigate('ForgotPassword')
    }
    
    const onSignUpPress = () => {
        console.log('sign up pressed')
        navigation.navigate('SignUp')
    }

  return (
    <Screen>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='center'></Image>
      <CustomInput
        name='user_name'
        placeholder='Username'
        control={control}
        rules={{
            required: 'Username is required'
        }}/>
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
      
      <CustomButton onPress={handleSubmit(login)} text='Sign In'/>
      <CustomButton onPress={onForgotPasswordPress} text='Forgot password?' type='TERTIARY'/>
    <SocialSignIn/>
      <CustomButton onPress={onSignUpPress} text="Don't have an account? Create one" type='TERTIARY'/>
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

export default SignIn