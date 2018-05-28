import React, { Component } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'

class ListItem extends Component {
  render() {
    const item = this.props.item;
    return(
      <View key={this.props.keyval} style={styles.listItem}>
        <Text style={styles.itemText}>{this.props.val.itemName}</Text>
        <TouchableOpacity onPress={this.props.delMe} style={styles.delItem}>
          <FontAwesome
            name="delete"
            size={26} >
          </FontAwesome>
        </TouchableOpacity>
      </View>
    )
  }
}
export default ListItem

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
