import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import { GameOverScreen } from './screens/GameOverScreen';
import { GameScreen } from './screens/GameScreen';
import { StartGameScreen } from './screens/StartGameScreen';
import { Colors } from './utils/colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [rounds, setRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })


  if (!fontsLoaded) {
    return <AppLoading />
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  }

  const handleGameOver = (numberOfRounds) => {
    setGameOver(true);
    setRounds(numberOfRounds);
  };

  const handleRestartGame = () => {
    setUserNumber(null);
    setRounds(0);
    setGameOver(false);
  }

  return (
    <>
    <StatusBar style='light'></StatusBar>
    <LinearGradient colors={[Colors.primary700, Colors.secondary500]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage} >
        {
          !userNumber && !gameOver &&
          <SafeAreaView style={styles.rootScreen}>
            <StartGameScreen onPickNumber={pickedNumberHandler} />
          </SafeAreaView>
        }
        {
          userNumber && !gameOver &&
          <SafeAreaView style={styles.rootScreen} >
            <GameScreen userNumber={userNumber} GameOver={handleGameOver} />
          </SafeAreaView>
        }
        {
          gameOver && userNumber &&
          <GameOverScreen userNumber={userNumber} rounds={rounds} restartGame={handleRestartGame} />
        }


      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
