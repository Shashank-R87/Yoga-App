import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import QuestionButton from './QuestionButton'
import { useNavigation } from '@react-navigation/core'

const Question_1 = () => {

    const navigation = useNavigation();

    const windowWidth = Dimensions.get("window").width;

    return (
        <SafeAreaView className="flex-1 justify-center items-start bg-white">
            <Text style={{ fontFamily: "PoppinsBold" }} className="ml-[30px] absolute text-[44px] text-[#3a3a3a] top-[77px]">What's your gender?</Text>
            <View className="ml-[30px]">
                <QuestionButton tag="first" text="Female" color="#FDB59F" fontcolor="#3A3A3A" />
                <QuestionButton tag="first" text="Male" color="#5767A3" fontcolor="#FFFFFF" />
                <QuestionButton tag="first" text="Other" color="#91B3D9" fontcolor="#3A3A3A" />
            </View>

            <StatusBar style='auto' />
        </SafeAreaView>
    )
}

export default Question_1