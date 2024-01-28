import React, { useEffect } from 'react';
import {  View, Text, StyleSheet, Image} from 'react-native';
import { useState } from 'react/cjs/react.development';

const PokemonDetails = ({route}) => {
    const [name, setName] = useState('');
    const [abilities, setAbilities] = useState([]);
    const [types, setTypes] = useState([]);
    const [stats, setStats] = useState([]);
    const [image, setImage] = useState('');

    useEffect(() => {
        fetch(route.params.apiCall)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.sprites.other['official-artwork']['front_default']);
            setName(capitalize(data.name));
            setAbilities(data.abilities);
            setTypes(data.types);
            setStats(data.stats);
            setImage(data.sprites.other['official-artwork']['front_default']);
        })
    }, [])

    const capitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
    }

    const styles = StyleSheet.create({
        image:{
            height: 200,
            width: 200
        },
        subheader:{
            textDecorationLine: 'underline',
            fontWeight: 'bold'
        },
        container: {
            alignItems:'center',
            justifyContent: 'center'
        },
        statSection: {
            alignItems: 'center',
            justifyContent: 'center'
        }
    })

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: `${image}`}}/>
            <Text style={styles.subheader}>Name</Text>
            <Text>{name}</Text>
            <Text style={styles.subheader}>Type</Text>
            {types.map(ty => (
                <Text>{ty.type.name}</Text>
            ))}
            <Text style={styles.subheader}>Abilities</Text>
            {abilities.map(ab => (
                <Text>{ab.ability.name}</Text>
            ))}
            <Text style={styles.subheader}>Stats</Text>
            {stats.map(stat => (
                <View style={styles.statSection}>
                    <Text style={styles.subheader}>{stat.stat.name}</Text>
                    <Text>{stat.base_stat}</Text>
                </View>
            ))}
        </View>
    )
}

export default PokemonDetails;