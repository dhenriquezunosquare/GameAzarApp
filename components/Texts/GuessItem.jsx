import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../utils/colors'

export const GuessItem = ({roundNumber,guess}) => {
  return (
    <View style={styles.listItem}>
        <Text style={styles.itemText}>#{roundNumber}</Text>
        <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem:{
        borderColor:Colors.primary800,
        padding:12,
        borderWidth:1,
        borderRadius:40,
        marginVertical:8,
        backgroundColor:Colors.secondary500,
        flexDirection:'row',
        justifyContent: 'space-between',
        width:'100%',
        elevation:10,
        shadowColor:'black',
        shadowOffset:{width:0, height:0},
        shadowOpacity:0.25,
        shadowRadius:3
    },
    itemText:{
        fontFamily:'open-sans',

    }
})