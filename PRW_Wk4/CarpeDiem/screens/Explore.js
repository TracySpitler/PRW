import React, { Component } from 'react'
import Tri from '../assets/triangles.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import InputAspire from '../components/InputAspire'
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

export default class Explore extends Component {
  static navigationOptions = {
    tabBarLabel: 'Explore',
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

  constructor(props){
    super(props)

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    const doStuff = [
      'See the Northern Lights',
      'Visit Greece',
      'Walk in the rain',
    ]
    this.state = {
      doStuff,
      dataSource: this.ds.cloneWithRows(doStuff),
      modalVisible: false
    }
    this.newWant = this.newWant.bind(this)
    this.delWant = this.delWant.bind(this)
  }

  saveWant(want) {
    AsyncStorage.setItem(
      '@WantListStore:Want',
      JSON.stringify(want)
    )
  }

  newWant(want) {
    const doStuff = [
      ...this.state.doStuff,
      want
    ]
    this.setState({
      doStuff,
      dataSource: this.ds.cloneWithRows(doStuff)
    })
    this.saveWant(doStuff)
  }

  delWant(key) {
    this.state.doStuff.splice(key, 1)
    this.setState({
      dataSource: this.ds.cloneWithRows(this.state.doStuff)
    })
    this.saveWant(this.state.doStuff)
  }

  render() {
    const {dataSource} = this.state
    return (
      <View style={styles.container}>
      <Text>Explore</Text>

      <ListView
        key={this._data}
        dataSource = {dataSource}
        renderHeader = {() => (
          <View>
          <ImageBackground source={Tri} style={styles.header}>
            <Text style={styles.h3}>Aspire to live</Text>
            <Text style={styles.p}>Go bigger than you ever have before!</Text>
          </ImageBackground>
          <InputAspire onNewWant={this.newWant}/>
          </View>
        )}

        renderRow = {(rowData, sectionID, rowID) => (
          <View style={styles.itemBox}>
          <Text>{rowData}</Text>

          <Text style={styles.icons}>
          <TouchableOpacity>
            <FontAwesome
              style={styles.edit}
              name="pencil"
              underlayColor={'#e31a1c'}
              size={26}>
            </FontAwesome>
          </TouchableOpacity>

          <TouchableOpacity onPress={ () => this.delWant(rowID) }>
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
})
