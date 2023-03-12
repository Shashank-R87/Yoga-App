import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import * as ScreenOrientation from 'expo-screen-orientation';
import { Dimensions } from 'react-native';
import WebView from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from '@react-navigation/core';

const VideoScreen = () => {

  const navigation = useNavigation()

  const route = useRoute()

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  // useEffect(() => {
  //   ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
  // }, [])

  return (<>
    {/* <TouchableOpacity onPress={() => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
      navigation.replace(`HomeScreen`,{width:windowWidth,height:windowHeight})
    }} className="absolute top-[20px] left-[20px] justify-center items-center z-10">
      <Image source={require("../assets/icons/Back.png")} />
    </TouchableOpacity> */}
    <WebView
      javaScriptEnabled={true}
      style={{ flex: 1 }}
      source={{ uri: `https://www.youtube.com/embed/${route.params.videoId}?rel=0&autoplay=1&showinfo=1&controls=1&fs=0&modestbranding=0` }} />
    <StatusBar hidden={true} style='light' />
  </>
  )
}

export default VideoScreen