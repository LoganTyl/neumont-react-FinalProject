import React from 'react';
import {  StyleSheet, Button, View, Text, ImageBackground} from 'react-native';
import { Pedometer } from 'expo-sensors';

export default class PedometerPage extends React.Component {
    state = {
        isPedometerAvailable: 'checking',
        stepsToKM: 1390,
        currentStepCount: 0,
        kmTraveled: 0
    };
  
    componentDidMount() {
        this._subscribe();
    }
  
    componentWillUnmount() {
        this._unsubscribe();
    }
  
    _subscribe = () => {
        this._subscription = Pedometer.watchStepCount(result => {
            let distance = result.steps/1390;
            distance = distance.toString();
            distance = distance.slice(0, (distance.indexOf("."))+3);
            this.setState({
                currentStepCount: result.steps,
                kmTraveled: distance
                
            });
        });
  
        Pedometer.isAvailableAsync().then(
            result => {
                if(result){
                    this.setState({
                        isPedometerAvailable: 'Sensor is Online!',
                    });
                }
                else{
                    this.setState({
                        isPedometerAvailable: 'Something happened, so the sensor does not work right now',
                    });
                }
            },
            error => {
                this.setState({
                    isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error,
                });
            }
        );
    };
  
    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} source={require('../assets/GrassBackground.png')}>
                    <Text>Pedometer Status: {this.state.isPedometerAvailable}</Text>
                    <Text>1 KM  = 1390 Steps</Text>
                    <Text>Steps Taken: {this.state.currentStepCount}</Text>
                    <Text>Distance Traveled: {this.state.kmTraveled} KM</Text>
                </ImageBackground>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container:{
        height: '100%'
    },
    backgroundImage:{
        flex: 1,
        maxWidth: '100%',
        width: '100%',
        height: 'auto',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7,
    },
})