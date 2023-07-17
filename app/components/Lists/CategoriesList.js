import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Title from '../common/Title'
import CategoryCard from '../cards/CategoryCard'

import { useNavigation } from '@react-navigation/native'

const CategoriesList = ({title, data, onPress}) => {
  const navigation = useNavigation();
  
  data=[...data, {'category': 'All', 'id': 0, 'sub': ''}].sort((a,b) => a.category > b.category ? 1 : -1)
  return (
    <>
        <Title size={20}>{title}</Title>
        <FlatList data={data} keyExtractor={(item) => item.id} horizontal showsHorizontalScrollIndicator={false} renderItem={({item}) => <CategoryCard item={item} onPress={onPress}/>}/>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default CategoriesList