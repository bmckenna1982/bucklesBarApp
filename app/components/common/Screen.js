import { StyleSheet, StatusBar, ScrollView } from 'react-native'
import React from 'react'

export default function Screen({children}) {
  return (
    <ScrollView style={styles.container}>
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor: 'whitesmoke',
        height: '100%'
    }
})