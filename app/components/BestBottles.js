import { View, StyleSheet } from 'react-native'
import React from 'react'
import HorizontalList from './HorizontalList'

const BestBottles = ({data}) => {
    data = data.sort((a,b) => a.rating < b.rating ? 1 : -1);
    data = data.slice(0,3);
  return <HorizontalList title='Highest Rated' data={data}/>
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default BestBottles