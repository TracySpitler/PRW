import React, { Component } from 'react'
import Tri from '../assets/triangles.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import InputToDo from '../components/InputToDo'
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ListView,
  AsyncStorage,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  Modal,
  TextInput
} from 'react-native'

export default class YourDay extends Component {
  static navigationOptions = {
    tabBarLabel: 'Your Day',
    tabBarIcon: ({ tintColor }) => {
      return (
        <FontAwesome
          name="sun-o"
          size={26}
          style={{ color: tintColor }} >
        </FontAwesome>
      )
    },
    tabBarOptions: {
      activeTintColor: '#fd8d3c',
    },
  }

  constructor(props){
    super(props)

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    const doThings = [
      'Go for a walk',
      'Finish Statistics research',
      'Westworld tonight!',
    ]
    this.state = {
      doThings,
      dataSource: this.ds.cloneWithRows(doThings),
      modalVisible: false
    }
    this.newTodo = this.newTodo.bind(this)
    this.delTodo = this.delTodo.bind(this)
  }

  componentDidMount() {
    AsyncStorage.getItem(
      '@TodoListStore:Todo',
      (err, data) => {
        if (err) {
          console.log('Error loading list', err)
        } else {
          const doThings = JSON.parse(data)
          this.setState({
            doThings,
            dataSource: this.ds.cloneWithRows(doThings)
          })
        }
      }
    )
  }

  saveTodo(todo) {
    AsyncStorage.setItem(
      '@TodoListStore:Todo',
      JSON.stringify(todo)
    )
  }

  delTodo(key) {
    this.state.doThings.splice(key, 1)
    this.setState({
      dataSource: this.ds.cloneWithRows(this.state.doThings)
    })
    this.saveTodo(this.state.doThings)
  }

  newTodo(todo) {
    const doThings = [
      ...this.state.doThings,
      todo
    ]
    this.setState({
      doThings,
      dataSource: this.ds.cloneWithRows(doThings)
    })
    this.saveTodo(doThings)
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const {dataSource} = this.state
    return (
      <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}>
        <View style={styles.container}>
          <View>
          <View style={styles.container}>

            <TextInput style={styles.input}
              placeholder="Edit item..."
              onChangeText={(todo) => this.setState({todo})}
              value={this.state.todo}
            />

            <Text>
            <TouchableOpacity onPress={ () => {this.setModalVisible(!this.state.modalVisible)}}>
              <FontAwesome
                style={styles.popI}
                name="minus-circle"
                size={26}>
              </FontAwesome>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.submit}>
              <FontAwesome style={styles.popI}
                name="plus-circle"
                size={26}>
              </FontAwesome>
            </TouchableOpacity>
            </Text>

            <Text>Could you help lead me in the right direction?</Text>
            <Text>I really want to solve this.</Text>
            <Text style={styles.note}>The minus sign will close this modal.</Text>

          </View>

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

        <Text>Your Day</Text>

        <ListView
          key={this._data}
          dataSource = {dataSource}
          renderHeader = {() => (
            <View>
            <ImageBackground source={Tri} style={styles.header}>
              <Text style={styles.h3}>Sieze Your Day</Text>
              <Text style={styles.p}>Go on...make it productive.</Text>
            </ImageBackground>
            <InputToDo onNewTodo={this.newTodo}/>
            </View>
          )}

          renderRow = {(rowData, sectionID, rowID) => (
            <View style={styles.itemBox}>
            <Text>{rowData}</Text>

            <Text style={styles.icons}>
            <TouchableOpacity onPress={ () => {this.setModalVisible(!this.state.modalVisible)}}>
              <FontAwesome
                style={styles.edit}
                name="pencil"
                underlayColor={'#e31a1c'}
                size={26}>
              </FontAwesome>
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => this.delTodo(rowID) }>
              <FontAwesome
                style={styles.remove}
                name="minus-circle"
                size={26}>
              </FontAwesome>
            </TouchableOpacity>
            </Text>
            </View>
          )}>

        </ListView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fd8d3c',
    padding: 60,
    width: Dimensions.get('window').width,
  },
  h3: {
    fontSize: 30,
    padding: 5,
    fontWeight: '700',
    color: 'white'
  },
  p: {
    color: 'white'
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  edit: {
    color: '#bdbdbd',
    marginRight: 20
  },
  remove: {
    color: '#e31a1c'
  },
  input: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    margin: 20,
    width: 250,
    justifyContent: 'center'
  },
  popI: {
    color: '#bdbdbd',
    margin: 10
  },
  note: {
    marginTop: 30,
    color: '#e31a1c'
  }
})
