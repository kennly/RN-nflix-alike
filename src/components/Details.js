import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
  Share,
  Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';
import TabsEpisodes from './TabsEpisodes';
import TextGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window')

class Details extends Component {

  constructor(props){
    super(props)
    this.state = {
      measuresTitle: 0,
      measuresSeason: 0,
      scrollY: new Animated.Value(0)
    }
  }

  static navigationOptions = {
    headerMode: null
  }

  onShare(){
    Share.share({
      title: 'Designated Survivor',
      url: 'www.youtube.com',
      message: 'Awesome Show'
    }, {
      //android
      dialogTitle: 'Share this awesome content',
      //ios
      excludeActivityTypes:[
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    })
  }



  render(){
    const headerNameToggle = this.state.scrollY.interpolate({
      inputRange : [this.state.measuresTitle, this.state.measuresTitle +1],
      outputRange : [0, 1]
    })
    const headerSeasonHide = this.state.scrollY.interpolate({
      inputRange: [
        this.state.measuresSeason -1,
        this.state.measuresSeason,
        this.state.measuresSeason + 1],
      outputRange: [ -width, 0, 0 ]
    })
    const headerSeasonToogle = this.state.scrollY.interpolate({
      inputRange: [
        this.state.measuresSeason,
        this.state.measuresSeason + 1],
      outputRange: [0, 1]
    })
    const {params} = this.props.navigation.state
    const {episodes} = params.item.details
    const {name} = params.item
    const {navigate} = this.props.navigation
    const {thumbnail, cast, description, year, creator, numOfEpisodes, season} = params.item.details

    return(
      <View style={{flex: 1}}>
        <TouchableHighlight
          style={styles.closeButton}
          onPress={() => goBack()}
        >
          <Icon
            name="close"
            color="white"
            size={18}
          />
        </TouchableHighlight>
          <Animated.View
            style={[styles.header, {opacity: headerNameToggle}]}
          >
            <Text style={styles.headerText}>{name}</Text>
          </Animated.View>
          <Animated.View
            style={[styles.header, {opacity: headerSeasonToogle, transform: [{translateY: 0}, {translateX: headerSeasonHide}]}]}
          >
            <Text style={styles.headerText}>Season 1</Text>
          </Animated.View>
        <Animated.ScrollView
          scrollEventThrottle = {1}
          style={styles.container}
          onScroll={
            Animated.event(
              [{nativeEvent: {contentOffset: {y:this.state.scrollY}}}],
              {useNativeDriver: true}
            )
          }
        >
          <Image
            source={{uri: thumbnail}}
            style={styles.thumbnail}
          >
          <View style={styles.buttonPlay}>
            <TouchableWithoutFeedback
              onPress={() => navigate('Details', {item: item})}
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
          <View style={styles.nameContainer}
            onLayout={({nativeEvent}) => {
              this.setState({
                measuresTitle: nativeEvent.layout.y
              })
            }}
          >
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
              <TouchableHighlight
                onPress={this.onShare}
              >
                <View style={styles.myShareIcon}>
                  <Icon
                    name='share-alt'
                    style={styles.shareIcon}
                    color="grey"
                    size={25}
                    />
                  <Text style={styles.text}>Share</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.nameContainer}
            onLayout={({nativeEvent}) => {
              this.setState({
                measuresSeason: nativeEvent.layout.y + 10
              })
            }}
          >
          <TabsEpisodes data={episodes}/>
        </View>
        </Animated.ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818'
  },
  header:{
    backgroundColor: '#181818',
    paddingVertical: 10,
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1
  },
  headerText: {
    color: 'white',
    fontSize: 20
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
