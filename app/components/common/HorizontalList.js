import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Title from './Title'
import SmallCard from '../cards/SmallCard'

const HorizontalList = ({title, data}) => {
  return (
    <>
        <Title size={20}>{title}</Title>
        <FlatList data={data} keyExtractor={item => item.bottle_id} horizontal showsHorizontalScrollIndicator={false} renderItem={({item}) => <SmallCard item={item}/>}/>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default HorizontalList