import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';
import TabsEpisodes from './TabsEpisodes';
import TextGradient from 'react-native-linear-gradient'

const {width, height} = Dimensions.get('window')

class Details extends Component {
  render(){

    const {episodes} = this.props.item.details
    const {name} = this.props.item
    const {thumbnail, cast, description, year, creator, numOfEpisodes, season} = this.props.item.details
    return(
      <ScrollView style={styles.container}>
        <Image
          source={{uri: thumbnail}}
          style={styles.thumbnail}
        >
        <View style={styles.buttonPlay}>
          <TouchableWithoutFeedback
            onPress={null}
          >
            <View>
              <Icon
                name="play-circle"
                size={90}
                color="white"
                style={styles.iconPlay}
                />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.nameContainer}>
          <TextGradient colors={['transparent', '#181818', '#181818']}>
            <Text style={[styles.text, styles.titleShow]}>{name}</Text>
          </TextGradient>
        </View>
        </Image>
        <View style={styles.descriptionContainer}>
          <View style={styles.subtitle}>
            <Text style={[styles.text, styles.subTitleText]}>{year}</Text>
            <Text style={[styles.text, styles.subTitleText]}>{numOfEpisodes}</Text>
            <Text style={[styles.text, styles.subTitleText]}>{season} Season</Text>
          </View>
          <View style={styles.description}>
            <Text style={[styles.text, styles.light]}>{description}</Text>
          </View>
          <Text style={[styles.text]}>Cast: {cast}</Text>
          <Text style={[styles.text]}>Creator: {creator}</Text>
          <View style={styles.shareListIcons}>
            <View style={styles.myListIcon}>
              <IonIcons
                  name='md-checkmark'
                  style={styles.listIcon}
                  color='grey'
                  size={25}
              />
            <Text style={styles.text}>My List</Text>
            </View>
            <View style={styles.myShareIcon}>
              <Icon
                  name='share-alt'
                  style={styles.shareIcon}
                  color="grey"
                  size={25}
              />
            <Text style={styles.text}>Share</Text>
            </View>
          </View>
        </View>
        <TabsEpisodes
          data={episodes}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818'
  },
  thumbnail: {
    width: width,
    height: 300
  },
  buttonPlay: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  iconPlay: {
    opacity: 0.7,
    backgroundColor: 'transparent'
  },
  descriptionContainer: {
    paddingHorizontal: 20
  },
  subtitle: {
    flexDirection: 'row'
  },
  subTitleText: {
    marginRight: 20
  },
  text: {
    color: '#b3b3b3',
    fontSize: 16
  },
  shareListIcons: {
    flexDirection:'row',
    marginVertical: 30
  },
  listIcon: {
    height: 25
  },
  shareIcon: {
    height: 25
  },
  myListIcon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20
  },
  myShareIcon: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    marginVertical: 10
  },
  light: {
    fontWeight: '200'
  },
  nameContainer:{
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
  titleShow: {
    fontSize: 35,
    paddingLeft: 10,
    marginBottom: 10,
    color: 'white',
    borderColor: 'transparent'
  }


})

export default Details
