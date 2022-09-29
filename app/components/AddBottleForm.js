import { Text, TextInput, View, StyleSheet } from 'react-native'
import React from 'react'

const AddBottleForm = ({inputStyle}) => {
    // const [value, setValue] =  useState(0);
  return (
    <View style={styles.container}>        
        <TextInput style={inputStyle} placeholder='UPC' />        
        <TextInput style={inputStyle} placeholder='Brand' />        
        <TextInput style={inputStyle} placeholder='Years Aged' />        
        {/* Category needs to be a selection */}
        <TextInput style={inputStyle} placeholder='Category' />        
        <TextInput style={inputStyle} placeholder='Size' />        
        <TextInput style={inputStyle} placeholder='MSRP' />        
        <TextInput style={inputStyle} placeholder='Description' />        
        <TextInput style={inputStyle} placeholder='Image' />        
        <TextInput style={inputStyle} placeholder='Tasting Notes' />        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        
    },
    input: {
        backgroundColor: 'white',
        paddingVertical: 5,
        borderRadius: 10,
        paddingLeft: 5,
        marginVertical: 5
    }
})

export default AddBottleForm