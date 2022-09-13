import { View, StyleSheet } from 'react-native'
import React from 'react'
import Title from './Title'
import FlatCard from './FlatCard'

const VerticalList = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Title>{title}</Title>
      {data.map(item => <FlatCard item={item}/>)}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default VerticalList