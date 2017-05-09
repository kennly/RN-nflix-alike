import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './components/List';
import Slider from './components/Slider';
import Header from './components/Header'


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Slider />
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
