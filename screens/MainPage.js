import React from 'react';
import {  FlatList,  StyleSheet, Button, View, Text, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MainPage = ({navigation}) => {
    return (
        <View>
            <Button
            title="Go To Pokedex"
            onPress={() => navigation.navigate('Pokedex')}
            />
            <Button
            title="Go To Pedometer"
            onPress={() => navigation.navigate('Pokemon Go Distance Tracker')}
            />
        </View>
    )
}

export default MainPage;