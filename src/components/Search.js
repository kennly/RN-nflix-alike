import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  Dimensions,
  FlatList,
  ScrollView,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {getAll} from '../api/api'


const {width, height }= Dimensions.get('window')

const shows_first = [
  {
     "key":1,
     "name":"24: Legacy",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/90/225030.jpg"
  },
  {
     "key":2,
     "name":"Colony",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/91/229234.jpg"
  },
  {
     "key":3,
     "name":"The Walking Dead",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/67/168817.jpg"
  },
  {
     "key":4,
     "name":"Taken",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/100/250528.jpg"
  },
  {
     "key":5,
     "name":"This is us",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/70/175831.jpg"
  },
  {
     "key":6,
     "name":"Superstore",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/69/174909.jpg"
  },
  {
     "key":7,
     "name":"Lethal Weapon",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/93/234808.jpg"
  },
  {
     "key":8,
     "name":"The 100",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/94/236401.jpg"
  },
  {
     "key":9,
     "name":"Homeland",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/101/254425.jpg"
  }
]

class Search extends Component {
  constructor(props){
      super(props)
      this.state = {
        text: '',
        data: ''
      }
  }

  static navigationOptions = {
    headerMode: null
  }

  filter(text){
    const data = getAll()
    const newData = data.filter(function(item){
      const itemData = item.name.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    this.setState({
      data: newData,
      text: text
    })
  }

  deleteData(){
    this.setState({ text: '', data: ''})
  }

  _renderItem(item){
    const {navigate} = this.props.navigation
    return(
      <TouchableWithoutFeedback
        onPress={() => navigate('Details', {item: item})}>
        <Image
          style={{width: 120, height: 180}}
          source={{uri: item.image}}
          />
      </TouchableWithoutFeedback>
    )
  }

  render(){
    return(
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon
                name="search"
                color="grey"
                size={18}
                style={styles.searchIcon}
            />
            <TextInput
              value={this.state.text}
              onChangeText={(text) => this.filter(text)}
              style={styles.input}
              placeholder="Search"
              placeholderTextColor="grey"
              keyboardAppearance="dark"
              autoFocus={true}
            />
            {this.state.text ?
              <TouchableWithoutFeedback
                onPress={() => this.deleteData()}
              >
                <Icon
                  name="times-circle"
                  color="grey"
                  size={18}
                  style={styles.iconInputClose}
                  />
              </TouchableWithoutFeedback>
            : null}
            <TouchableWithoutFeedback
              style={styles.cancelButton}
              onPress={() => this.props.navigator.pop()}
            >
              <View style={styles.containerButton}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <ScrollView>
            <FlatList
              style={{marginHorizontal: 5}}
              data={this.state.data}
              numColumns={3}
              columnWrapperStyle={{marginTop: 5, marginLeft: 5}}
              renderItem={({item}) => this._renderItem(item)}
            />
          </ScrollView>
        </View>
    )
  }
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818'
  },
  header:{
    height:40,
    backgroundColor: '#181818',
    borderBottomWidth: 1,
    borderColor: '#3a3a3a',
    paddingBottom: 5,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position:'relative'
  },
  searchIcon:{
    position:'absolute',
    top: 5,
    left: 15,
    zIndex: 1,
    backgroundColor:'transparent'
  },
  iconInputClose:{
    position:'absolute',
    top: 5,
    right:90,
    backgroundColor:'transparent',
    zIndex: 1
  },
  input: {
    width:width - (width /4),
    height: 30,
    backgroundColor: '#323232',
    marginHorizontal: 10,
    paddingLeft: 30,
    borderRadius: 3
  },
  cancelButtonText: {
    color: 'white'
  },
  image: {
    marginRight: 5,
    width: 115,
    height: 170
  }
})

export default Search
