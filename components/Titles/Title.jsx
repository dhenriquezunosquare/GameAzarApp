import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../utils/colors'

export const Title = ({title}) => {
  return (
    <Text style={styles.title}>{title}</Text>
  )
}

const styles = StyleSheet.create({
    title:{
      fontFamily:'open-sans-bold',
      fontSize:18,
      fontWeight: 'bold',
      color:'white',
      textAlign: 'center',
      padding:8,
      borderWidth:2,
      borderColor: 'white'
      
    }
  })
