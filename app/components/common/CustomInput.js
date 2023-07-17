import { View, StyleSheet, TextInput, Text } from 'react-native'
import React from 'react'

import { Controller} from 'react-hook-form';

const CustomInput = ({control, name, placeholder, secureTextEntry, rules={}}) => {
  return (      
      <Controller 
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
          <View style={[styles.container, {borderColor: error ? 'red' : 'gray'}]}>
            <TextInput 
              value={value} 
              onChangeText={onChange} 
              onBlur={onBlur} 
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />          
          </View>
          {error && <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>}
          </>
        )}
      />
    
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5
    },
    input: {

    }
})

export default CustomInput