import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard, Image, Pressable, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/core'
import Tabs from "../components/Tabs"
import { StatusBar } from 'expo-status-bar';

const ProfileScreen = () => {

    const navigation = useNavigation()

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    return (
        <SafeAreaView className="flex-1 items-start justify-center bg-[#9DEA57]">

            <View className="absolute -z-20 top-[-150.28px] left-[-200.28px]">
                <Image source={require("../assets/Backgrounds/PROFILE.png")} />
            </View>

            <View className=" absolute -top-[30px] left-[50px] -z-0">{
                <View className="rotate-90 mt-[30px] top-[30px] left-[-20px]">
                    <Animatable.Text animation="fadeInLeft" duration={1000} style={{ fontFamily: "PoppinsBold" }} className="text-[62px] text-white">Pro</Animatable.Text>
                    <Animatable.Text animation="fadeInLeft" duration={1000} style={{ fontFamily: "PoppinsBold" }} className="text-[62px] mt-[-55px] text-white">file.</Animatable.Text>
                </View>
            }
            </View>

            <View className="absolute bottom-0 -z-10">
                <Image resizeMode='cover' className="w-[426.99px] h-[482.84px]" source={require("../assets/Backgrounds/P.png")} />
            </View>

            <View style={{ paddingTop: 30 }} className="m-[30px]">
                <Text style={{ fontFamily: "PoppinsBlack" }} className="-mt-[40px] text-[24px] text-white">Hello</Text>
                <View className="mt-[10px] w-[250px] h-[93px] rounded-[20px] flex-row items-center justify-evenly bg-[#3A3A3A]">
                    <Image source={require("../assets/Backgrounds/usericon.png")} />
                    <Text style={{ fontFamily: "PoppinsSemiBold" }} className="text-[24px] text-white">Shashank</Text>
                </View>

                <View className="mt-[40px] flex-row items-center justify-evenly">
                    <View className="mr-[20px] rounded-[20px] flex items-center justify-center w-[149px] h-[105px] bg-[#3A3A3A]">
                        <Text style={{ fontFamily: "PoppinsMedium" }} className="text-[20px] text-white">Male</Text>
                        <Text style={{ fontFamily: "PoppinsMedium" }} className="text-[14px] text-[#A9A9A9]">GENDER</Text>
                    </View>
                    <View className="rounded-[20px] flex items-center justify-center w-[192px] h-[105px] bg-[#3A3A3A]">
                        <Text style={{ fontFamily: "PoppinsMedium" }} className="text-[20px] text-white">Start Yoga</Text>
                        <Text style={{ fontFamily: "PoppinsMedium" }} className="text-[14px] text-[#A9A9A9]">GOAL</Text>
                    </View>
                </View>

                <View className="mt-[20px] rounded-[20px] flex items-center justify-center w-[192px] h-[105px] bg-[#3A3A3A]">
                    <Text style={{ fontFamily: "PoppinsMedium" }} className="text-[20px] text-white">Beginner</Text>
                    <Text style={{ fontFamily: "PoppinsMedium" }} className="text-[14px] text-[#A9A9A9]">LEVEL</Text>
                </View>

                <TouchableOpacity activeOpacity={0.5} className="ml-[121px]">
                    <View className="top-[20px] rounded-[10px] items-center justify-center w-[111px] h-[32px] bg-[#3A3A3A]">
                        <Text style={{ fontFamily: "PoppinsSemiBold" }} className="text-[14px] text-white">Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <StatusBar style='auto' />

        </SafeAreaView>
    )
}

export default ProfileScreen