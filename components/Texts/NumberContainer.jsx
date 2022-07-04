import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Colors } from '../../utils/colors'

export const NumberContainer = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{message}</Text>
    </View>
  )
}


const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary500,
    borderRadius: 8,
    margin: deviceWidth < 380 ? 12 : 24,
    padding: deviceWidth < 380 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.secondary500,
    fontSize: deviceWidth<380 ? 28 :36 ,
    fontWeight: 'bold',
  }
})
