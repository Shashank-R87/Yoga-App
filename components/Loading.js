import { View, Dimensions} from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";
import { useRoute } from '@react-navigation/core';

const Loading = ({width}) => {

    const route = useRoute()

    if (route.params){
        var windowWidth = route.params.width;
        var windowHeight = route.params.height;
    }else{
        var windowWidth = Dimensions.get('window').width;
        var windowHeight = Dimensions.get('window').height;
    }

    return (
        <View style={{width: windowWidth}} className="flex items-center">
            <LottieView
                source={require("../assets/lottie/yoga-black.json")}
                style={{width:width, height:width}}
                autoPlay
            />
        </View>
    )
}

export default Loading