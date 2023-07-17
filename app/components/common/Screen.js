import { StyleSheet, StatusBar, ScrollView } from 'react-native'
import React from 'react'

export default function Screen({children}) {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 5,
        backgroundColor: 'whitesmoke',       
        alignItems: 'center',
        minHeight: '100%'
    }
})