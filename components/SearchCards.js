import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/core'

const SearchCards = ({ title, time, videoId }) => {

    windowWidth = Dimensions.get("window").width;

    const navigation = useNavigation()
    const route = useRoute()

    const openVideo = () => {
        navigation.navigate("Video", { videoId, name: `${route.name}` })
    }

    return (
        <TouchableOpacity onPress={openVideo} activeOpacity={0.8} className="ml-[26px] mt-[20px] w-[360px] h-[300px] bg-[#3A3A3A] rounded-[10px]">
            <Image style={{ width: 360 }} className="h-[200px] rounded-[10px]" source={{ uri: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` }} />
            <View style={{ width: windowWidth - 52 }} className="ml-[20px] mt-[20px]">{
                title?.length > 30 ?
                    <Text style={{ fontFamily: "PoppinsSemiBold" }} className="text-white text-[21px]">{title?.slice(0, 23)}...</Text> :
                    <Text style={{ fontFamily: "PoppinsSemiBold" }} className="text-white text-[21px]">{title}</Text>
            }
                <Text style={{ fontFamily: "PoppinsSemiBold" }} className="text-white text-[14px]">{time} mins</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SearchCards