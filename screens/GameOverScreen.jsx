import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from '../components/Buttons/PrimaryButton'
import { Title } from '../components/Titles/Title'
import { Colors } from '../utils/colors'

export const GameOverScreen = ({rounds,userNumber,restartGame}) => {
  return (
    <View style={styles.container}>
      <Title title="GAME OVER!" />
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')} resizeMode="cover" />
      </View>
      <Text style={styles.generalText}>
         Your Phone needed <Text style={styles.highlightText}>{rounds}</Text> rounds to guess the number  <Text style={styles.highlightText}>{userNumber}</Text>. 
      </Text>
      <PrimaryButton onPress={restartGame} >Start New Game</PrimaryButton>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: Colors.primary800,
    margin: 36
  },
  image: {
    height: '100%',
    width: '100%'
  },
  generalText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginVertical:24
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
})