import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard, Image, Pressable, Alert, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/core'
import { StatusBar } from 'expo-status-bar';
import * as SecureStore from 'expo-secure-store';
import { auth } from '../firebase'

const ProfileScreen = () => {

    const [username, setusername] = useState("Undefined");
    const [gender, setgender] = useState("Undefined");
    const [goal, setgoal] = useState("Undefined");
    const [level, setlevel] = useState("Undefined");

    async function changeloggedin() {
        await SecureStore.setItemAsync("loggedin", "false");
        await SecureStore.setItemAsync("username", "");
        await SecureStore.setItemAsync("email", "");
    }

    async function getuserdetails() {
        setusername(await SecureStore.getItemAsync("username"));
        setgender(await SecureStore.getItemAsync("gender"));
        setgoal(await SecureStore.getItemAsync("goal"));
        setlevel(await SecureStore.getItemAsync("level"));
    }

    async function storedatawithemail() {
        let gender = await SecureStore.getItemAsync("gender");
        let goal = await SecureStore.getItemAsync("gender");
        let level = await SecureStore.getItemAsync("gender");

        let userdata = { "gender": gender, "goal": goal, "level": level }

        await SecureStore.setItemAsync(email, JSON.stringify(userdata))
    }

    useEffect(() => {
        getuserdetails()
    }, [])

    const navigation = useNavigation()

    windowWidth = Dimensions.get("window").width;

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Initial")
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
                <View style={{ width: windowWidth - 100 }} className="mt-[10px] h-[100px] rounded-[20px] flex-row items-center justify-evenly bg-[#3A3A3A]">
                    <Image style={{ width: 70, height: 70, borderColor: "white", borderWidth: 2 }} className="rounded-[100px]" source={require("../assets/Backgrounds/usericon.jpg")} />
                    {
                        username.length > 10 ?
                            <Text style={{ fontFamily: "PoppinsSemiBold" }} className="text-[24px] text-white mr-[5px]">{username.slice(0, 10)}..</Text> :
                            <Text style={{ fontFamily: "PoppinsSemiBold" }} className="text-[24px] text-white mr-[5px]">{username}</Text>
                    }
                </View>

                <View className="mt-[40px] flex-row items-center justify-evenly">
                    <View style={{ width: windowWidth - 263 }} className="mr-[20px] rounded-[20px] flex items-center justify-center h-[105px] bg-[#3A3A3A]">
                        <Text style={{ fontFamily: "PoppinsMedium" }} className="text-[20px] text-white">{gender}</Text>
                        <Text style={{ fontFamily: "PoppinsMedium" }} className="text-[14px] text-[#A9A9A9]">GENDER</Text>
                    </View>
                    <View style={{ width: windowWidth - 220 }} className="rounded-[20px] flex items-center justify-center h-[105px] bg-[#3A3A3A]">
                        {
                            goal.length > 10 ?
                                <Text style={{ fontFamily: "PoppinsMedium" }} className="text-[20px] text-white">{goal.slice(0, 10)}.</Text> :
                                <Text style={{ fontFamily: "PoppinsMedium" }} className="text-[20px] text-white">{goal}</Text>
                        }
                        <Text style={{ fontFamily: "PoppinsMedium" }} className="text-[14px] text-[#A9A9A9]">GOAL</Text>
                    </View>
                </View>

                <View style={{ width: windowWidth - 220 }} className="mt-[20px] rounded-[20px] flex items-center justify-center h-[105px] bg-[#3A3A3A]">
                    <Text style={{ fontFamily: "PoppinsMedium" }} className="text-[20px] text-white">{level}</Text>
                    <Text style={{ fontFamily: "PoppinsMedium" }} className="text-[14px] text-[#A9A9A9]">LEVEL</Text>
                </View>

                <TouchableOpacity onPress={() => { handleSignOut(); changeloggedin(); navigation.replace("Login") }} activeOpacity={0.5} className="ml-[121px]">
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