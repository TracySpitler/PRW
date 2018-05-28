import React, { Component } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet
} from 'react-native'

export default class LifeList extends Component {
  static navigationOptions = {
    tabBarLabel: 'LifeList',
    tabBarIcon: ({ tintColor }) => {
      return (
        <FontAwesome
          name="grav"
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
        <Text>Testing second page lalalalala here i am just working like magic...</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
