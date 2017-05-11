import React, { Component } from 'react';
import {
  Navigator
} from 'react-native'

import App from './App';
import Search from './components/Search';
import buildStyleInterpolator from 'buildStyleInterpolator';

const NoTransition = {
  opactiy:{
    from: 1,
    to: 1,
    min: 1,
    max: 1,
    type: 'linear',
    extrapolate: false,
    round: 100
  }
}

class IndexApp extends Component {
  _renderScene(route, navigator){
      var navigator = { navigator}

      switch(route.ident){
        case 'App':
          return(
            <App {...navigator}/>
          )
        case 'Search':
          return(
            <Search {...navigator}/>
          )

      }
  }

  _configureScene(route, routeStack){
    switch(route.ident){
      case 'Search':
        return {
          ...Navigator.SceneConfigs.FloatFromLeft,
            gestures: null,
            defaultTransitionVelocity: 100,
            animationInterpolators: {
              into: buildStyleInterpolator(NoTransition),
              out: buildStyleInterpolator(NoTransition)
            }
        }
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ident: 'App'}}
        renderScene={this._renderScene}
        configureScene={this._configureScene}
      />
    )
  }
}

export default IndexApp
