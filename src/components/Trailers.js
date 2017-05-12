import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';


class Trailers extends Component {
  // constructor(props){
  //   super(props)

  // }

  render(){
    return(
      <Text style={styles.text}>
        Trailers
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: '#b3b3b3'
  }

})

export default Trailers
