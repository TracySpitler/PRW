import React, { Component } from 'react'
import Tri from '../assets/triangles.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
//import ListItem from '../components/ListItem'
import InputField from '../components/InputField'
import {
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  Dimensions,
  ListView,
  AsyncStorage,
  TouchableOpacity,
  ImageBackground
} from 'react-native'

export default class YourDay extends Component {
  static navigationOptions = {
    tabBarLabel: 'YourDay',
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
      dataSource: this.ds.cloneWithRows(doThings)
    }
    this.newTodo = this.newTodo.bind(this)

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

  delMe() {
    //this.state.itemArray.splice(todo, 1);
    this.setState({
      //doThings,
      dataSource: this.ds.cloneWithRows(doThings.slice(0))
    });
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

  render() {
    const {dataSource} = this.state
    return (
      <View style={styles.container}>
        <Text>Your Day</Text>

        <ListView
          dataSource = {dataSource}
          renderHeader = {() => (
            <View>
            <ImageBackground source={Tri} style={styles.header}>
              <Text style={styles.h3}>Sieze Your Day</Text>
              <Text>Go on...make it productive.</Text>
            </ImageBackground>
            <InputField onNewTodo={this.newTodo}/>
            </View>
          )}
          renderRow = {(todo) => (
            <View style={styles.itemBox}>
            <Text>{todo}</Text>
            <TouchableOpacity onPress={this.props.delMe}>
              <FontAwesome
                name="trash"
                size={26}>
              </FontAwesome>
            </TouchableOpacity>
            </View>

            // <TouchableOpacity onPress={this.props.delMe}>
            //   <FontAwesome
            //     name="delete"
            //     size={26}>
            //   </FontAwesome>
            // </TouchableOpacity>
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
    fontWeight: '700'
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  }
})
