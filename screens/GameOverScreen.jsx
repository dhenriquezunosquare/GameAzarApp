import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, useWindowDimensions, ScrollView } from 'react-native'
import { PrimaryButton } from '../components/Buttons/PrimaryButton'
import { Title } from '../components/Titles/Title'
import { Colors } from '../utils/colors'

export const GameOverScreen = ({ rounds, userNumber, restartGame }) => {

  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if (width < 380) imageSize = 150;

  if (height < 400) imageSize = 80;

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }

  return (
    <ScrollView style={{ flex: 1,marginTop:30 }}>
      <View style={styles.container}>
        <Title title="GAME OVER!" />
        <View style={[styles.imageContainer, { ...imageStyle }]}>
          <Image style={styles.image} source={require('../assets/images/success.png')} resizeMode="cover" />
        </View>
        <Text style={styles.generalText}>
          Your Phone needed <Text style={styles.highlightText}>{rounds}</Text> rounds to guess the number  <Text style={styles.highlightText}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={restartGame} >Start New Game</PrimaryButton>
      </View>
    </ScrollView>

  )
}

// const deviceWidth = Dimensions.get('window').width;
// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  imageContainer: {
    // borderRadius: deviceWidth < 380 ? 100 : 150,
    // width: deviceWidth < 380 ? 200 : 300,
    // height: deviceWidth < 380 ? 200 : 300,
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
    marginVertical: 24
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
})