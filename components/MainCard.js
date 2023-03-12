import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';

const MainCard = ({ videoId }) => {

    const navigation = useNavigation()
    const route = useRoute()

    if (route.params){
        var windowWidth = route.params.width;
        var windowHeight = route.params.height;
    }else{
        var windowWidth = Dimensions.get('window').width;
        var windowHeight = Dimensions.get('window').height;
    }

    const openVideo = () => {
        navigation.navigate("Video", { videoId, name: route.name })
    }

    return (
        <TouchableOpacity onPress={openVideo} activeOpacity={0.8} className="ml-[30px] mt-[10px] w-[360px] h-[160px]">
            <View style={{ backgroundColor: 'rgba(0,0,0,0.50)', width: windowWidth - 52 }} className="absolute z-10 h-[160px] rounded-[25px] flex items-start justify-evenly">
                <Text style={{ fontFamily: "PoppinsSemiBold" }} className="ml-[30px] text-[21px] text-white">Beginners</Text>
                <Text style={{ fontFamily: "PoppinsMediumItalic" }} className="ml-[30px] text-[14px] text-white">10 mins{"\n"}training</Text>
            </View>
            <Image style={{ width: windowWidth - 52 }} className="h-[160px] rounded-[25px]" source={{ uri: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` }} />

        </TouchableOpacity>
    )
}

export default MainCard