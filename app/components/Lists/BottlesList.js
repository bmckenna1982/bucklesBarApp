import React from 'react'
import { RadioButton } from 'react-native-paper'
import VerticalList from './VerticalList'

const BottlesList = ({route}) => { 
  return <VerticalList title="Vodka" data={route.params.inventory}/>
}

export default BottlesList