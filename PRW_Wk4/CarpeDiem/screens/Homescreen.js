import React, { Component } from 'react'
import Tri from '../assets/triangles.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet
} from 'react-native'

class Homescreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => {
      return (
        <FontAwesome
          name="home"
          size={26}
          style={{ color: tintColor }} >
        </FontAwesome>
      )
    }
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

export default Homescreen

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
    resizeMode: 'cover'
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
