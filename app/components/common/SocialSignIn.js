import { View, StyleSheet } from 'react-native';
import React from 'react';

import CustomButton from './CustomButton';

const SocialSignIn = () => {

    const onSignInWithGoogle = () => {
        console.log('sign in pressed')
    }
    const onSignInWithFacebook = () => {
        console.log('sign in pressed')
    }
    const onSignInWithApple = () => {
        console.log('sign in pressed')
    }
    
  return (
    <>
      <CustomButton onPress={onSignInWithGoogle} text='Sign in with Google' bgColor='#FAE9EA' fgColor='#DB4437'/>
      <CustomButton onPress={onSignInWithFacebook} text='Sign in with Facebook' bgColor='#E7EAF4' fgColor='#4765A9'/>
      <CustomButton onPress={onSignInWithApple} text='Sign in with Apple' bgColor='#e3e3e3' fgColor='#363636'/>
    </>
  )
}

export default SocialSignIn