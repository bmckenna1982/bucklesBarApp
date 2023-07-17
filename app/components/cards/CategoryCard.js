import { View, StyleSheet, Text, Dimensions, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const {width} = Dimensions.get('window')

const CategoryCard = ({item, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onPress(item)}>
      <View style={styles.container}>
        {item.sub.length > 1 && <Text style={styles.category}>{item.sub}</Text>}
        <Text style={styles.category}>{item.category}</Text>        
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