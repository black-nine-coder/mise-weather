import React from 'react';
import Loading from "./js/components/Loader/Loading";
import { Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import Weather from "./js/components/View/Weather";
import Axios from 'axios';

const API_KEY = '6baaf1fd281dae1f110c586c594e832e';

export default class App extends React.Component {
  
  state = {
    isLoading: true,
    weather: null,
  }

  _getWeather = async(latitude, longitude) => {
    /* console.log(latitude);
    console.log(longitude);
    const { data } = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log(data)
    this.setState({ weather: data }); */
    
    await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    ).then(
      response => this.setState({ 
        weather: response.data 
        , isLoading: false
      })
    )
    
  }
  
  // 위치 정보를 획득
  _getLocation = async() => {
    try {
        await Permissions.askAsync(Permissions.LOCATION);

        const {
          coords: {latitude, longitude}
        } = await Location.getCurrentPositionAsync({});
        
        // 위치 정보로 날씨 데이터를 획득
        this._getWeather(latitude, longitude);
    } catch (error) {
        Alert.alert("위치 정보를 확인할 수 없습니다.");
    }
  }

  componentDidMount() {
    this._getLocation();
  }

  /* render() {
    const isLoading = this.state.isLoading;
    const weatherData = this.state.weather;
    console.log(isLoading);
    console.log(weatherData);
    return isLoading ? <Loading /> : null; 
  }  */
  render() {
    /* return (
          this.state.isLoading ? <Loading /> : <Weather data={this.state.weather} />
    ); */
    return (
      <Loading />
    );
  }
}