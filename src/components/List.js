import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

import {getTwoItems} from '../api/api'

class List extends Component {

  newPushContent(item){
    this.props.navigator.push({
      ident: 'Details',
      passProps: {
        item
      }
    })
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

  render() {
    console.log(this.props)
    return (
      <View style={{flex :1}}>
        <View>
          <Text style={styles.text}>My List of TV Shows</Text>
          <FlatList
              horizontal
              ItemSeparatorComponent={() => <View style={{width: 5}} />}
              renderItem={({item}) => this._renderItem(item)}
              data={getTwoItems[0]}
          />
        </View>
        <View>
          <Text style={styles.text}>Top picks for you</Text>
          <FlatList
              horizontal
              ItemSeparatorComponent={() => <View style={{width: 5}} />}
              renderItem={({item}) => this._renderItem(item)}
              data={getTwoItems[1]}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  }
})

export default List;
