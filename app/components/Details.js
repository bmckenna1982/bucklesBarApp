import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import Title from './Title'

const Details = ({item}) => {    
  return (
    // <Text>Details</Text>
    <View>
        {/* {Object.keys(item).map(key => <Text>{`${key}: ${item[key]}`}</Text>)} */}
        <Text>Brand: {item.brand}</Text>
        <Text>Category: {item.category}</Text>
        {/* <Text>Desc: {item.desc}</Text> */}
        <Text>Date Bottled: {item.bottledDate}</Text>
        <Text>Age: {item.age}</Text>
        <Text>MSRP: {item.msrp}</Text>
        <Text>Paid: {item.paid}</Text>
        <Text>Rating: {item.paid}</Text>
    </View>
 
  )
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default Details