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

export default class InputField extends Component {
  constructor() {
    super()
    this.state = {
      todo: ''
    }
    this.submit = this.submit.bind(this)
  }

  submit() {
    if (this.state.todo !== null || this.state.todo !== "") {
      this.props.onNewTodo(this.state.todo)
      this.setState({todo: ''})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder="I need to..."
          onChangeText={(todo) => this.setState({todo})}
          value={this.state.todo}
        />
        <TouchableOpacity onPress={this.submit}>
          <FontAwesome style={styles.button}
            name="check"
            size={26}>
          </FontAwesome>
        </TouchableOpacity>

      </View>
    )
  }
}

InputField.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
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
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
})
