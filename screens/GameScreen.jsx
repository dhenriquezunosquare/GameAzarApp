import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import React, { useEffect, useState } from 'react'
import { Alert, FlatList, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { PrimaryButton } from '../components/Buttons/PrimaryButton';
import { Card } from '../components/Cards/Card';
import { Label } from '../components/Texts/Label';
import { NumberContainer } from '../components/Texts/NumberContainer';
import { Title } from '../components/Titles/Title'
import { Colors } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons';
import { GuessItem } from '../components/Texts/GuessItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export const GameScreen = ({ userNumber, GameOver }) => {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [guessRounds, setGessRounds] = useState([initialGuess]);

  const { width, height } = useWindowDimensions();


  const nextGuessHandler = (direction) => { //lower / higher

    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
      Alert.alert("Hey... Dont Lie!!", 'You know that is wrong... bullsh....', [{
        text: 'Sorry', style: 'cancel'
      }]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;

    }
    if (direction === 'higher') {
      minBoundary = currentGuess + 1;
    }
    const newNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newNumber);
    setGessRounds(prev => [newNumber, ...prev]);
  }

  const guessRoundsLength = guessRounds.length;

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [])

  useEffect(() => {
    if (currentGuess == userNumber) {
      console.log("Entro");
      GameOver(guessRounds.length)
    }
  }, [currentGuess, userNumber, GameOver]);


  let content = <>
    <NumberContainer message={currentGuess} />
    <Card>
      <Label message="higher or lower" style={styles.label} />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <PrimaryButton onPress={() => nextGuessHandler('higher')}>
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={() => nextGuessHandler('lower')}>
            <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
    </Card>
  </>

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonContainerWidth}>
          <View style={styles.button}>
            <PrimaryButton onPress={() => nextGuessHandler('higher')}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer message={currentGuess} />
          <View style={styles.button}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>

      </>
    );
  }

  return (
    <View style={styles.container}>
      <Title title="Opponent's Guess" />

      {content}

      <View style={styles.listContainer}>
        <FlatList alwaysBounceVertical={false} data={guessRounds} renderItem={
          (itemData) => <GuessItem key={itemData.index} roundNumber={guessRoundsLength - itemData.index} guess={itemData.item} />
        } />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    // alignContent: 'center',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.secondary500,
    textAlign: 'center',
    padding: 8,
    borderWidth: 2,
    borderColor: Colors.secondary500,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonContainerWidth: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    padding: 8
  }
})
