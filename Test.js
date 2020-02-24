import React from 'react';
import Loading from './Loading';
import { Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';


export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getLocation = async() => {
    try {
        await Permissions.askAsync(Permissions.LOCATION);

        const location = await Location.getCurrentPositionAsync({});
        console.log(location);
        this.setState({ location });
        // this.setState({ isLoading: false });
    } catch (error) {
        Alert.alert("위치 정보를 확인할 수 없습니다.");
    }
  }
  
  componentDidMount() {
    this.getLocation();
  }

  /* render () {
    // const { isLoading } = this.state.isLoading;
    console.log(this.state.isLoading);
    // const { location } = this.state.location;
    return  <Loading />;
    // return isLoading ? <Loading /> : null;
  } */
  render() {
    return (
        <View>  
            <View style={styles.top}>
                아이콘
            </View>
            <View style={styles.bottom}>
                <Text style={styles.main}>텍스트</Text>
                <Text style={styles.temp}>18 ℃</Text>
            </View>
        </View> 
    );
  }
  
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1
        , width
        , height
    },
    top: {
        flex: 1
        , alignItems: 'center'
        , justifyContent: 'flex-end'
    },
    bottom: {
        flex: 1
        , alignItems: 'center'
        , justifyContent: 'flex-start'
    },
    text: {
        fontSize: 50
        , marginBottom:10
        , fontWeight: '600'
    }
});