import { View, StyleSheet } from 'react-native'
import React from 'react'
import BlockCard from './BlockCard'

const BottlePreview = ({item}) => {
  return <BlockCard item={item} style={{ marginVertical: 15 }}/>  
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default BottlePreview