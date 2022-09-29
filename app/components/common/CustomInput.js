import { View, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({children}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        
    },
    input: {

    }
})

export default CustomInput