import React from 'react'
import { StyleSheet, Text, Platform } from 'react-native'
import { Colors } from '../../utils/colors'

export const Title = ({ title }) => {
  return (
    <Text style={styles.title}>{title}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 8,
    // borderWidth: Platform.OS === 'android' ? 0 : 2,
    // borderWidth:Platform.select({ios:2,android:0}),
    borderWidth:2,
    borderColor: 'white',
    maxWidth: '80%',
    width: 300
  }
})
