import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image
} from 'react-native'

const shows_first = [
  {
     "key":6,
     "name":"24: Legacy",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/90/225030.jpg"
  },
  {
     "key":7,
     "name":"Colony",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/91/229234.jpg"
  },
  {
     "key":8,
     "name":"The Walking Dead",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/67/168817.jpg"
  },
  {
     "key":9,
     "name":"Taken",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/100/250528.jpg"
  }
]

const shows_second = [
  {
     "key":10,
     "name":"This is us",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/70/175831.jpg"
  },
  {
     "key":11,
     "name":"Superstore",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/69/174909.jpg"
  },
  {
     "key":12,
     "name":"Lethal Weapon",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/93/234808.jpg"
  },
  {
     "key":13,
     "name":"The 100",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/94/236401.jpg"
  },
  {
     "key":14,
     "name":"Homeland",
     "image":"https://static.tvmaze.com/uploads/images/medium_portrait/101/254425.jpg"
  }
];

class List extends Component {

  _renderItem(item){
    return(
      <View>
        <Text>{item.name}</Text>
        <Image
          style={{width: 120, height: 180}}
          source={{uri: item.image}}
          />
      </View>
    )
  }

  render() {
    return (
      <View style={{flex :1}}>
        <View>
          <Text style={styles.text}>My List of TV Shows</Text>
          <FlatList
              horizontal
              ItemSeparatorComponent={() => <View style={{width: 5}} />}
              renderItem={({item}) => this._renderItem(item)}
              data={shows_first}
          />
        </View>
        <View>
          <Text style={styles.text}>Top picks for you</Text>
          <FlatList
              horizontal
              ItemSeparatorComponent={() => <View style={{width: 5}} />}
              renderItem={({item}) => this._renderItem(item)}
              data={shows_second}
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
