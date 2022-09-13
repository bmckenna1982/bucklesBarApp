import { View, StyleSheet } from 'react-native'
import React from 'react'
import CategoriesList from './CategoriesList'


const Categories = ({data}) => {
  return <CategoriesList title='Categories' data={data}/>
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default Categories