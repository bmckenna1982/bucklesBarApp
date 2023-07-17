import React from 'react'
import { RadioButton } from 'react-native-paper'
import useBottles from '../../hooks/useBottles'
import VerticalList from './VerticalList'

const BottlesList = ({categoryName}) => { 
  console.log('categoryName', categoryName)
  const {inventory} = useBottles();  
  return <VerticalList title={categoryName} data={inventory}/>
}

export default BottlesList