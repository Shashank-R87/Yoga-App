import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/core'

const CategoriesCard = ({ title, time, videoId }) => {

    const navigation = useNavigation()
    const route = useRoute()

    const openVideo = () => {
        navigation.navigate("Video", { videoId, name: `${route.name}` })
    }

    return (
        <TouchableOpacity onPress={openVideo} activeOpacity={0.8} className="mr-[10px] w-[233px] h-[250px] bg-[#3A3A3A] rounded-[10px] ml-[10px]">
            <Image className="w-[233px] h-[130px] rounded-[10px]" source={{ uri: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` }} />
            <View className="ml-[20px] mt-[20px]">{
                title?.length > 12 ?
                    <Text style={{ fontFamily: "PoppinsSemiBold" }} className="text-white text-[21px]">{title?.slice(0, 12)}...</Text> :
                    <Text style={{ fontFamily: "PoppinsSemiBold" }} className="text-white text-[21px]">{title}</Text>
            }
                <Text style={{ fontFamily: "PoppinsSemiBold" }} className="text-white text-[14px]">{time} mins</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoriesCard