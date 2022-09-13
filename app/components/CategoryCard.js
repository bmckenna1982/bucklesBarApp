import { View, StyleSheet, Text, Dimensions } from 'react-native'
import React from 'react'

const {width} = Dimensions.get('window')

const CategoryCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.category}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: width / 2,
        marginRight: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 100,        
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingHorizontal: 5
    },
    category: {
        fontFamily: "Roboto",
        fontSize: 22,
    }
})

export default CategoryCard