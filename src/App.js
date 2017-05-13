import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './components/List';
import Slider from './components/Slider';
import Header from './components/Header';
import Menu from './components/Menu';

import SideMenu from 'react-native-side-menu';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
  }

  static navigationOptions = {
    headerMode: 'none'
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  updateMenu(isOpen){
    this.setState({isOpen})
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <SideMenu
          menu={<Menu />}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenu(isOpen)}
        >
          <View style={[{flex: 1}, styles.container]}>
            <Header navigation={this.props.navigation} toggle={this.toggle.bind(this)}/>
            <Slider />
            <List  navigation={this.props.navigation}/>
          </View>
        </SideMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000'

  },
});

export default App;
