import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import intro from './142-loading-animation.json';

export default function Loading(){
    /* return (
        <View style={ styles.container }>
          <LinearGradient colors={['#2C5364', '#203A43', '#0F2027']} style={ styles.grad }>
            <Text style={ styles.text }>
              Now Loading...
            </Text>
          </LinearGradient>
        </View>
    ); */
    /* return (
      <View style={ styles.container }>
        
        <LottieView
            source={require("./142-loading-animation.json")}
            autoPlay
            loop
        />
      </View>
    ); */
    
    return (
      <View style={ styles.container }>
        
        <LottieView
          progress = { 0 }
          source = { intro }
          autoPlay
          loop
          speed = { 2.5 }
        />

      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        // , alignItems: 'center'
        // , justifyContent: 'center'
        , backgroundColor: '#3490dc'
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