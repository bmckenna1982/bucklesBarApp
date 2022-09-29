import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/components/navigation/AppNavigator';

import barAPI from './app/api/barAPI';
import SignIn from './app/components/screens/SignIn';

export default function App() {
  return (
    <SignIn/>
    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>
  );
  

  // let bottles = data.sort((a,b) => a.purchaseDate < b.purchaseDate ? 1 : -1);
  // let liqCategories = liquors.sort((a,b) => a > b ? 1 : -1); 
  // latestBottles = bottles.slice(0, 3);
  // console.log(bottles)
  // return (
  //   <Screen>
  //     <SearchBar />
  //     <Categories data={liqCategories}/>
  //     <BottlesList data={data}/>
  //     {/* <BottlePreview item={latestBottles[0]}/> */}
  //     {/* <BottleCard item={data.find(item => (item.id == 1))}/> */}
  //     <LatestBottles data={latestBottles}/>
  //     <BestBottles data={data}/>
  //   </Screen>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
