import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from './app/components/SearchBar';
import Screen from './app/components/Screen';
import BottlePreview from './app/components/BottlePreview';
import LatestBottles from './app/components/LatestBottles';

import data from './fakeData';
import BestBottles from './app/components/BestBottles';

export default function App() {

  let latestBottles = data.sort((a,b) => a.purchaseDate < b.purchaseDate ? 1 : -1);
  latestBottles = latestBottles.slice(0, 3);
  console.log(latestBottles)
  return (
    <Screen>
      <SearchBar />
      <BottlePreview item={latestBottles[0]}/>
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
