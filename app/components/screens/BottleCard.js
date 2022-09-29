import { View, StyleSheet, Image, Text, Dimensions } from 'react-native'
import React from 'react'
import Title from '../common/Title';
import Details from '../Details';
import SubTitle from '../common/SubTitle';

const {height, width} = Dimensions.get('window')

const BottleCard = ({item}) => {
    const { thumbnail, name, desc } = item;
  return (
    <View style={styles.container}>
      <Title>{name}</Title>
      <Text>{desc}</Text>
      <View style={styles.contentContainer}>
        <View style={styles.notesContainer}>
          <Image source={{uri: thumbnail}} style={[styles.image]} resizeMode='contain'></Image>        
          {/* <Text>Tasting notes: {item.tastingNotes}</Text> */}
        </View>
        <View style={styles.details}>
          <Details item={item}/>
        </View>        
      </View>
      <Text>Tasting notes: {item.tastingNotes}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: 'auto',
      borderRadius: 8,
      overflow: 'hidden',
      backgroundColor: 'white',
      padding: 8
    },
    image: {
      height: 200,
      width: 'auto'
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      paddingVertical: 8
    },
    notesContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'flex-start',
      flex: 2
    },
    details: {      
      flex: 2
    }
})

export default BottleCard