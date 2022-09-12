import { View, StyleSheet } from 'react-native'
import React from 'react'

const TopBar = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default TopBar