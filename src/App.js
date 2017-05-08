import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './components/List';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
