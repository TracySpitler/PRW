import React, { Component } from 'react'
import Tri from '../assets/triangles.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground
} from 'react-native'

export default class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => {
      return (
        <FontAwesome
          name="home"
          size={26}
          style={{ color: tintColor }} >
        </FontAwesome>
      )
    },
    tabBarOptions: {
      activeTintColor: '#fd8d3c',
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={Tri} style={styles.pic}>
          <Text style={styles.h1}>Carpe Diem!</Text>
          <Text style={styles.p}>A to-do list to help you sieze your day.</Text>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  h1: {
    color: '#ffffff',
    fontSize: 50
  },
  p: {
    color: '#ffffff',
    fontSize: 20
  }
})
