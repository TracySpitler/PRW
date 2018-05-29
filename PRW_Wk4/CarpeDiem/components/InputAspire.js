import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

export default class InputAspire extends Component {
  constructor() {
    super()
    this.state = {
      want: ''
    }
    this.submit = this.submit.bind(this)
  }

  submit() {
    if (this.state.want !== null && this.state.want !== "") {
      this.props.onNewWant(this.state.want)
      this.setState({want: ''})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder="I want to..."
          onChangeText={(want) => this.setState({want})}
          value={this.state.want}
        />
        <TouchableOpacity onPress={this.submit}>
          <FontAwesome style={styles.add}
            name="plus-circle"
            size={26}>
          </FontAwesome>
        </TouchableOpacity>

      </View>
    )
  }
}

InputAspire.propTypes = {
  onNewWant: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  add: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    color: '#bdbdbd'
  }
})
