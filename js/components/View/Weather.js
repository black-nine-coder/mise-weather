import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Weather({ data }){
    return (
        <View style={styles.container}>
            <Text>{data.name}</Text>
            <Text>{data.weather[0].main}</Text>
            <Text>{Math.ceil(data.main.temp - 273.15)}℃</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        , alignItems: 'center'
        , justifyContent: 'center'
    },
    text: {
        alignItems: 'center'
        , justifyContent: 'center'
        , fontSize: 15
        , color: '#fff'
    }
});