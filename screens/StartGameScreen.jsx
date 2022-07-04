import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View, Keyboard, Alert, TouchableWithoutFeedback, Text, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import { PrimaryButton } from '../components/Buttons/PrimaryButton'
import { Card } from '../components/Cards/Card'
import { Label } from '../components/Texts/Label'
import { Title } from '../components/Titles/Title'
import { Colors } from '../utils/colors'

export const StartGameScreen = ({ onPickNumber }) => {
    const [number, setNumber] = useState('');
    const { width, height } = useWindowDimensions();

    const handleChange = (text) => {
        setNumber(text)
    }

    const confirmInput = () => {
        const chosenNumber = parseInt(number);
        if (isNaN(chosenNumber) || chosenNumber > 99 || chosenNumber < 1) {
            Alert.alert('Invalid number!', "Please enter a correct number. (1-99)", [{ text: 'Okay', style: 'destructive', onPress: () => resetInput() }])
            return;
        }
        onPickNumber(number);
    }

    const resetInput = () => {
        setNumber('')
    }


    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <ScrollView style={{ flex: 1}}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior='position'>
                <View style={[styles.rootConainer, { marginTop: marginTopDistance }]}>
                    <Title title="Guess My Number"></Title>
                    <Card>
                        <Label message="Enter a number" />
                        <TextInput style={styles.textInput} maxLength={2} keyboardType="number-pad" autoCapitalize='none' autoCorrect={false}
                            value={number} onChangeText={handleChange}
                        />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <PrimaryButton onPress={resetInput}> Reset</PrimaryButton>
                            </View>
                            <View style={styles.button}>
                                <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>

    )
}

// const deviceWidth = Dimensions.get('window').width;
// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    rootConainer: {
        flex: 1,
        // marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: 'center',
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.secondary500,
        borderBottomWidth: 2,
        color: Colors.secondary500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    buttonContainer: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    button: {
        flex: 1
    },

})