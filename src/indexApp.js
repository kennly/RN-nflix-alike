import React, { Component } from 'react';
import {
  Navigator
} from 'react-native'

import App from './App';
import Search from './components/Search';
import Details from './components/Details';
import {StackNavigator} from 'react-navigation';
// import Video from './components/VideoPlayerView';

const IndexApp = StackNavigator({
  Home: {screen: App},
  Details: {screen: Details},
  Search: {screen: Search}
},{
  headerMode: 'screen'
})


export default IndexApp
