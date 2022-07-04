import React from 'react'
import { StyleSheet, View,Dimensions } from 'react-native'
import { Colors } from '../../utils/colors'

export const Card = ({children}) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ?18 : 24,
    backgroundColor: Colors.primary800,
    borderRadius: 6,
    elevation: 10, //Android only
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 }
},
})