import { View, StyleSheet } from 'react-native'
import React from 'react'
import HorizontalList from './HorizontalList'

const LatestBottles = ({data}) => {
  return <HorizontalList title='Latest' data={data}/>
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default LatestBottles