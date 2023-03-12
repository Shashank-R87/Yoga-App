import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import QuestionButton from './QuestionButton'
import { useNavigation } from '@react-navigation/core'

const Question_3 = () => {

    const navigation = useNavigation()

    const windowWidth = Dimensions.get("window").width;

    return (
        <SafeAreaView className="flex-1 justify-center items-start bg-white">
            <Text style={{ fontFamily: "PoppinsBold" }} className="ml-[30px] absolute text-[44px] text-[#3a3a3a] top-[77px]">What's your level?</Text>
            <View className="ml-[30px]">
                <QuestionButton tag="third" text="Beginner" color="#F5CD8F" fontcolor="#3a3a3a" />
                <QuestionButton tag="third" text="Skilled" color="#9399D7" fontcolor="#ffffff" />
                <QuestionButton tag="third" text="Guru" color="#FDB59F" fontcolor="#3a3a3a" />
            </View>
            <View style={{ width: windowWidth - 60 }} className="absolute flex-row justify-start bottom-[60px] ml-[30px] mr-[30px]">
                <TouchableOpacity onPress={()=>{navigation.navigate("Second")}} activeOpacity={0.5} style={{ width: windowWidth - 322 }} className="h-[51px] bg-[#3a3a3a] rounded-[10px] justify-center items-center">
                    <Text style={{ fontFamily: "PoppinsMedium" }} className="text-white text-[16px] leading-[20px]">BACK</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style='auto' />
        </SafeAreaView>
    )
}

export default Question_3