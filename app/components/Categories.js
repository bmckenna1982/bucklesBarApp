import { View, StyleSheet } from 'react-native'
import React from 'react'
import CategoriesList from './Lists/CategoriesList'


const Categories = ({data, onPress}) => {
  // console.log('categories data', data)
  return <CategoriesList title='Categories' data={data} onPress={onPress}/>
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default Categories