import { View, StyleSheet, Text, Dimensions, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const {width} = Dimensions.get('window')

const CategoryCard = ({item, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.category}>{item}</Text>
      </View>

    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    container: {
        width: width / 2.5,
        marginRight: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 60,        
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