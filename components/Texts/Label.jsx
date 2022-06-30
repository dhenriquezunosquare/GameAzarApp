import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Colors } from '../../utils/colors'

export const Label = ({message,style}) => {
  return (
    <Text style={[styles.text,style]}>{message}</Text>
  )
}

const styles = StyleSheet.create({
    text:{
        fontFamily:'open-sans',
        color:Colors.secondary500,
        fontSize:24
    }    
})
