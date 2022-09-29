import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import Title from '../common/Title'
import SubTitle from '../common/SubTitle'

const BlockCard = ({style, imageStyle, item}) => {  
    const { thumbnail, name, desc } = item;
    return (
      <View style={[styles.container, style]}>
        <Image source={{uri: thumbnail}} style={[styles.image, imageStyle]} resizeMode='contain'></Image>
        <View style={styles.contentContainer}>
            <Title>{name}</Title>
            <SubTitle>{desc}</SubTitle>
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white'        
    },
    image: {
        maxWidth: '100%',
        height: 200
    },
    contentContainer: {
        padding: 5
    }
})

export default BlockCard;