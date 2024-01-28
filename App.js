import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from './screens/MainPage';
import PokedexPage from './screens/Pokedex';
import PedometerPage from './screens/EggPedometer';
import PokeDetails from './screens/PokemonDetails';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={MainPage}
                />
                <Stack.Screen
                    name="Pokedex"
                    component={PokedexPage}
                />
                <Stack.Screen
                    name="Pokemon Go Distance Tracker"
                    component={PedometerPage}
                />
                <Stack.Screen
                    name="Pokemon Details"
                    component={PokeDetails}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default App;