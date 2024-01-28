import React from 'react';
import { StyleSheet, Text, ScrollView, ImageBackground } from 'react-native';
import PokeCard from './PokeCard';

export default class PokedexPage extends React.Component {
    state = {
        apiURL: 'https://pokeapi.co/api/v2/pokemon?limit=151',
        pokemonList: null
    };
  
    componentDidMount() {
        fetch(this.state.apiURL)
        .then(response => response.json())
        .then(data => {
            this.setState({
                pokemonList: data.results,
            })
        })
    }


    render() {
        if(this.state.pokemonList){
            return (
                <ScrollView style={styles.container}>
                    <ImageBackground style={styles.backgroundImage} source={require('../assets/GrassBackground.png')}>
                        {this.state.pokemonList.map(pokemon => (
                            <PokeCard 
                            key={pokemon.name}
                            name={pokemon.name}
                            pokeURL={pokemon.url}
                            />
                        ))}
                    </ImageBackground>
                </ScrollView>
            )
        }
        else{
            return (
                <Text>Pokemon Loading</Text>
            )
        }
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