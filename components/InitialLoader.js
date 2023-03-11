import { View, Dimensions} from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";

const InitialLoader = () => {

  var windowWidth = Dimensions.get('window').width;

  return (
    <View style={{width: windowWidth}} className="flex-1 items-center justify-center bg-[white]">
    <LottieView className="top-[-20px]"
        source={require("../assets/lottie/yoga-check.json")}
        style={{width:300, height:300}}
        autoPlay
    />
</View>
  )
}

export default InitialLoader