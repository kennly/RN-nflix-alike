import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


const Header = props =>  {
  const {navigate} = props.navigation

  return(
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => props.toggle()}
        >
        <Icon
          name="bars"
          color="white"
          size={25}
          />
      </TouchableWithoutFeedback>
      <Image style={styles.logo} source={require('../images/logo.jpeg')} />
      <TouchableWithoutFeedback
        onPress={() => navigate('Search')}
        >
        <Icon
          name="search"
          color="white"
          size={25}
          />
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    paddingHorizontal: 15
  },
  logo: {
    width: 120,
    height: 40
  }
})

export default Header;
