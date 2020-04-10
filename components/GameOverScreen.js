import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import BodyText from "./BodyText";
import TitleText from "./TitleText";
import Colors from "../constants/Colors";
import MainButton from "./MainButton";

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <Image
                // fadeDuration={300}
                source={require('../assets/success.png')}
                // source={{uri: 'https://image.shutterstock.com/image-vector/phased-plan-action-stages-climbing-260nw-1094690144.jpg'}}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.resultContainer}>
                <BodyText>Number of rounds: <Text style={styles.highlight}>{props.roundsNumber}</Text></BodyText>
                <BodyText>Number was: {props.userNumber}</BodyText>
                <MainButton onPress={props.onRestart}>
                    NEW GAME
                </MainButton>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    resultContainer: {
        marginVertical: 15,
        marginHorizontal: 30
    },
    highlight: {
        color: Colors.primaryColor,
        fontFamily: 'open-sans-bold'

    }
});
export default GameOverScreen;