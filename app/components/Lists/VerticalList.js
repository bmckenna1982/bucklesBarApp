import { View, StyleSheet } from 'react-native'
import React from 'react'
import Title from '../common/Title'
import FlatCard from '../cards/FlatCard'

const VerticalList = ({ title, data }) => {  
  return (
    <View style={styles.container}>
      <Title>{title}</Title>
      {data.map(item => <FlatCard item={item} key={item.id}/>)}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default VerticalList