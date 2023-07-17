import { View, StyleSheet } from 'react-native'
import React from 'react'
import HorizontalList from './common/HorizontalList'

const LatestBottles = ({data}) => {
  // console.log('latest inventory', data)
  return <HorizontalList title='Latest' data={data}/>
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default LatestBottles