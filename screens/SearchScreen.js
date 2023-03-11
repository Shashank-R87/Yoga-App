import { View, Text, Image, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import SearchCards from '../components/SearchCards'
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/core'

const SearchScreen = () => {

    const route = useRoute()
    windowWidth = Dimensions.get("window").width;

    const [isloading, setisloading] = useState(true)

    const data = route.params.data;
    var req_data = [];

    try {
        const key = route.params.rev;
        for (let i = 0; i < data.length; i++) {
            if ((data[i].category_1 == key) || (data[i].category_2 == key) || (data[i].categoryTime == key)) {
                req_data.push(data[i]);
            }
        }
    }
    catch (e) {
        console.log(e)
    }

    return (
        <SafeAreaView className="flex-1 items-start justify-center bg-[#F3E05F]">
            <View className="absolute -z-20 top-[-150.28px] left-[-200.28px]">
                <Image source={require("../assets/Backgrounds/Search.png")} />
            </View>

            <View className="absolute top-[50px] left-[26px]">
                <Animatable.Text animation="fadeInLeft" duration={1000} style={{ paddingVertical: 6, paddingHorizontal: 15, fontFamily: "PoppinsSemiBold" }} className="bg-white rounded-[10px] text-[#3A3A3A] text-[14px] leading-[21px]">{route.params.text}</Animatable.Text>
            </View>

            <ScrollView style={{ width: windowWidth }} className="mt-[62px] mb-[10px]">
                {
                    req_data.length == 0 ?
                        data.map(item => <SearchCards time={item.time} title={item.title} videoId={item.videoId} key={item._id} />) :
                        req_data.map(item => <SearchCards time={item.time} title={item.title} videoId={item.videoId} key={item._id} />)
                }
            </ScrollView>

            <View className="absolute bottom-[-2px] -z-10">
                <Image resizeMode='cover' className="w-[426.99px] h-[482.84px]" source={require("../assets/Backgrounds/S.png")} />
            </View>

            <StatusBar style='auto' />
        </SafeAreaView>
    )
}

export default SearchScreen