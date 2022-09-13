import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Title from './Title'
import CategoryCard from './CategoryCard'

const CategoriesList = ({title, data}) => {
  return (
    <>
        <Title size={20}>{title}</Title>
        <FlatList data={data} keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false} renderItem={({item}) => <CategoryCard item={item}/>}/>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default CategoriesList