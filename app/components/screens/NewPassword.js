import { View, StyleSheet, Image, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';

import Screen from '../common/Screen';
import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import Title from '../common/Title';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const NewPassword = () => {
    const {code, setCode} = useState('');
    const {password, setPassowrd} = useState('');
    const {passwordRepeat, setPasswordRepeat} = useState('');
    const { control, handleSubmit, formState: {error}, watch } = useForm();
    const navigation = useNavigation();

    const onBackPress = () => {
        console.log('back to sign in pressed');
        navigation.navigate('SignIn')
    }
    
    const onSubmitPress = () => {
        console.log('sign in pressed');
        //submit password
        navigation.navigate('AppNavigator')
    }
  return (
    <Screen>
      <Title size={20} paddingVertical={15}>Reset your password</Title>
      <CustomInput placeholder='Confirmation code' value={code} setValue={setCode}/>
      <CustomInput placeholder='New password' value={password} setValue={setPassowrd} secureTextEntry/>
      <CustomInput placeholder='Repeat password' value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry/>
      <CustomButton onPress={onSubmitPress} text='Submit'/>
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

export default NewPassword