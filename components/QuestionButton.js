import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core';
import * as SecureStore from 'expo-secure-store';

const QuestionButton = ({ text, color, fontcolor, tag }) => {

    async function storeUsergender(gender) {
        await SecureStore.setItemAsync("gender", gender);
    }

    async function storeUsergoal(goal) {
        await SecureStore.setItemAsync("goal", goal);
    }

    async function storeUserlevel(level) {
        await SecureStore.setItemAsync("level", level);
    }

    const question = (tag) =>{
        if (tag === "first"){
            storeUsergender(text)
            navigation.navigate("Second")
        } else if (tag === "second"){
            storeUsergoal(text)
            navigation.navigate("Third")
        } else if (tag === "third"){
            storeUserlevel(text)
            navigation.navigate("Initial")
        }
    }

    const navigation = useNavigation()

    const windowWidth = Dimensions.get("window").width;

    return (
        <TouchableOpacity onPress={()=>{
            question(tag)
        }} activeOpacity={0.7} style={{width:windowWidth-60, backgroundColor:color}} className="mt-[25px] h-[90px] rounded-[20px] flex items-start justify-center">
            <Text style={{fontFamily:"PoppinsSemiBold",color:fontcolor}} className="ml-[30px] text-[28px]">{text}</Text>
        </TouchableOpacity>
    )
}

export default QuestionButton