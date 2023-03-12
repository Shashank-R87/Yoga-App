import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/core'
import { Dimensions } from 'react-native';

const tabs = ({screen}) => {

    const navigation = useNavigation()
    const route = useRoute()

    if (route.params){
        var windowWidth = route.params.width;
        var windowHeight = route.params.height;
    }else{
        var windowWidth = Dimensions.get('window').width;
        var windowHeight = Dimensions.get('window').height;
    }

    var HomeIcon = require("../assets/icons/Home.png")
    var CategoryIcon = require("../assets/icons/Category.png")
    var ProfileIcon =require("../assets/icons/Profile.png")

    if (screen==="Home"){
        HomeIcon = require("../assets/icons/Home-active.png")
    }else if (screen==="Category"){
        CategoryIcon = require("../assets/icons/Category-active.png")
    }else if (screen==="Profile"){
        ProfileIcon = require("../assets/icons/Profile-active.png")
    }

    return (
        <View style={{ shadowColor: "black", elevation: 10, width: windowWidth-60 }} className={`ml-[30px] bg-[#fff] absolute bottom-[20px] h-[61px] rounded-[30px] flex-row items-center justify-around`}>
            <TouchableOpacity onPress={() => {
                navigation.replace("Home")
            }} activeOpacity={0.5}>
                <Image source={HomeIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.replace("Category")
            }} activeOpacity={0.5}>
                <Image source={CategoryIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.replace("Profile")
            }} activeOpacity={0.5}>
                <Image source={ProfileIcon} />
            </TouchableOpacity>
        </View>
    )
}

export default tabs