import React from 'react';
import { StyleSheet } from 'react-native';

import { AuthProvider } from './app/context/AuthContext';
import AppNav from './app/components/navigation/AppNav';

export default function App() {
  
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
