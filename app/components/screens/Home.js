import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import SearchBar from '../common/SearchBar';
import Screen from '../common/Screen';
import BottlePreview from '../BottlePreview';
import LatestBottles from '../LatestBottles';
import BestBottles from '../BestBottles';
import Categories from '../Categories';
import BottlesList from '../Lists/BottlesList';

import data from '../../../fakeData';
import liquors from '../../../categories';
import AddBottleForm from './AddBottle';
import AddBottle from './AddBottle';

import useBottles from '../../hooks/useBottles';

const Home = () => {
    const [categorySelect, setCategorySelect] = useState(null);
    const {
        bottles,
        inventory,
        latestBottles,
        categoryBottles,
        bestBottles,
        categories
       } = useBottles()
//    let bottles = data.sort((a,b) => a.purchaseDate < b.purchaseDate ? 1 : -1);
//    let liqCategories = route.params.categories.sort((a,b) => a > b ? 1 : -1); 
//   latestBottles = bottles.slice(0, 3);
   
   console.log('inventory', inventory)
   console.log('categorySelect', categorySelect)
   
   const filterByCategory = (inventory) => {
    if (categorySelect) {
      return [...inventory].filter(item => item.category === categorySelect)
    }
   }
   
   const onPress = (category) => {
    setCategorySelect(category)    
   }

    return (
        <Screen>
          <SearchBar />
          <Categories data={categories} onPress={onPress}/>
          {categorySelect ? <BottlesList data={categorySelect.category}/> : ''}
          {/* <AddBottle /> */}
          {/* <BottlesList data={data}/> */}
          {/* <BottlePreview item={latestBottles[0]}/> */}
          {/* <BottleCard item={data.find(item => (item.id == 1))}/> */}
          <LatestBottles data={latestBottles}/>
          <BestBottles data={bestBottles}/>
        </Screen>
      );
}

const styles = StyleSheet.create({
    container: {
        
    }
})

export default Home