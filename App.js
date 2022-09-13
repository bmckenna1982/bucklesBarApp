import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from './app/components/SearchBar';
import Screen from './app/components/Screen';
import BottlePreview from './app/components/BottlePreview';
import LatestBottles from './app/components/LatestBottles';

import data from './fakeData';
import BestBottles from './app/components/BestBottles';
import liquors from './categories';
import Categories from './app/components/Categories';
import BottlesList from './app/components/BottlesList';
import BottleCard from './app/components/BottleCard';
import barAPI from './app/api/barAPI';

export default function App()
  const [bottles, setBottles] =useState([]);
  const [latestBottles, setLatestBottles] =useState([]);
  const [categoryBottles, setCategoryBottles] =useState([]);
  const [bestBottles, setBestBottles] =useState([]);

  const filterMultipleBottles = async () => {
    const bottles = await barAPI 
  }

  useEffect(() => {
    filterMultipleBottles()
  }, [])

  let bottles = data.sort((a,b) => a.purchaseDate < b.purchaseDate ? 1 : -1);
  let liqCategories = liquors.sort((a,b) => a > b ? 1 : -1); 
  latestBottles = bottles.slice(0, 3);
  console.log(bottles)
  return (
    <Screen>
      <SearchBar />
      <Categories data={liqCategories}/>
      {/* <BottlesList data={data}/> */}
      <BottlePreview item={latestBottles[0]}/>
      <BottleCard item={data.find(item => (item.id == 1))}/>
      <LatestBottles data={latestBottles}/>
      <BestBottles data={data}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
