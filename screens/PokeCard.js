import React, { useEffect } from 'react';
import {  Button, View, Text, StyleSheet} from 'react-native';
import { useState } from 'react/cjs/react.development';
import { useNavigation } from '@react-navigation/core';

const PokeCard = (props) => {
    const [hookName, setName] = useState('');
    const [hookPokeURL, setPokeURL] = useState('');
    const [dexNum, setDexNum] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        console.log(props)
        let pokeName = props.name;
        pokeName = pokeName[0].toUpperCase() + pokeName.slice(1).toLowerCase()
        let url = props.pokeURL;
        let index = url.split('/')[url.split('/').length - 2];
        setName(pokeName);
        setPokeURL(url);
        setDexNum(index);
    }, [])

    return (
        <View style={styles.pokemonCard}>
            <Text style={styles.number}>{dexNum}</Text>
            <Text style={styles.monName}>{hookName}</Text>
            <Button
            title="Check Details"
            onPress={() => navigation.navigate('Pokemon Details', {apiCall: hookPokeURL})}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        height: 200,
        width: 200
    },
    pokemonCard: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 20,
        width: '60%',
        backgroundColor: '#bbb'
    },
    number: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    monName: {
        fontSize: 20,
        marginBottom: 10
    }
})

export default PokeCard;