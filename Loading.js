import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Loading(){
    return (
        <View style={ styles.container }>
          <LinearGradient colors={['#2C5364', '#203A43', '#0F2027']} style={ styles.grad }>
            <Text style={ styles.text }>
              Now Loading...
            </Text>
          </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        , alignItems: 'center'
        , justifyContent: 'center'
    },
    grad: {
        padding: 15
        , alignItems: 'center'
        , borderRadius: 5
    },
    text :{
      backgroundColor: 'transparent',
      fontSize: 15,
      color: '#fff'
    }
});