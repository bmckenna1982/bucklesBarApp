import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Title from '../common/Title'
import CategoryCard from '../cards/CategoryCard'

import { useNavigation } from '@react-navigation/native'

const CategoriesList = ({title, data}) => {
  const navigation = useNavigation();
  return (
    <>
        <Title size={20}>{title}</Title>
        <FlatList data={data} keyExtractor={(item, index) => {return index.toString()}} horizontal showsHorizontalScrollIndicator={false} renderItem={({item}) => <CategoryCard item={item}/>}/>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default CategoriesList