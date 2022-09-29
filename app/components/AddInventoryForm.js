import { View, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const AddInventoryForm = ({inputStyle}) => {
  return (
    <View style={styles.container}>
      <TextInput style={inputStyle} placeholder='Purchase location'/>
      <TextInput style={inputStyle} placeholder='Price'/>
      <TextInput style={inputStyle} placeholder='Rating'/>
      <TextInput style={inputStyle} placeholder='Demand'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default AddInventoryForm