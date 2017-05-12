import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Text
 } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


class Episodes extends Component {
  renderEpisodes(){
    console.log('props item', this.props)
    const res = this.props.episodes.map((item,i)  => {
      const img = item.image == null ? 'https://www.google.com.au/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwi9_a3t6enTAhXGabwKHY_oBHEQjRwIBw&url=http%3A%2F%2Fjpninfo.com%2F31855&psig=AFQjCNHdhM7mlWQ6dqsRl5iZj3tn5hhpsQ&ust=1494660354939341' : item.image.medium
      return (
        <View style={styles.video} key={i}>
          <View style={styles.videoEpisode}>
            <Image style={styles.image} source={{uri: img}}>
              <View style={styles.buttonPlay}>
                <TouchableWithoutFeedback>
                  <View style={{backgroundColor: 'transparent'}}>
                    <Icon
                      name="play-circle"
                      size={30}
                      color="white"
                      style={styles.iconPlay}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </Image>
            <View style={styles.episodeName}>
              <Text style={styles.text}>{item.number}. {item.name}</Text>
              <Text style={styles.text}>{item.runtime}</Text>
            </View>
          </View>
          <Text style={styles.summary}>{item.summary}</Text>
        </View>
      )
    })

    return res;
  }

  render(){
    return(
      <View style={styles.container}>
        {this.renderEpisodes()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height:80,
    marginRight: 10
  },
  container: {
    flex: 1,
    marginHorizontal: 10
  },
  text: {
    color: 'white'
  },
  episodeName: {
    justifyContent: 'center'
  },
  summary: {
    color:'grey',
    marginVertical: 10
  },
  buttonPlay: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  videoEpisode: {
    flexDirection: 'row'
  }


})

export default Episodes
