import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard, Image, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from "../firebase"
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/core'
import * as Animatable from 'react-native-animatable'
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar'

const LoginScreen = () => {

    async function storeUserdetails(email, username) {
        await SecureStore.setItemAsync("username", username);
        await SecureStore.setItemAsync("email", email);
        await SecureStore.setItemAsync("loggedin", "true");
    }

    async function checkloggedin() {
        let loggedin = await SecureStore.getItemAsync("loggedin");
        if (loggedin === "true") {
            navigation.replace("Empty")
        }
    }

    checkloggedin();

    const navigation = useNavigation()

    const [Show, setShow] = useState(true)

    const [keyboardStatus, setKeyboardStatus] = useState('');

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardStatus('Keyboard Shown');
            setShow(false)
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardStatus('Keyboard Hidden');
            setShow(true)
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // useEffect(() => {
    //     const check = auth.onAuthStateChanged(user => {
    //         if (user) {
    //             navigation.replace("Home")
    //         }
    //     })

    //     return check
    // }, [])

    const handleSignIn = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                Keyboard.dismiss()
                storeUserdetails(user.email, username);
                navigation.replace("Initial");
            }).catch(error => {
                if (error.code === 'auth/invalid-email') {
                    Alert.alert("Email", "Email entered is invalid", [{ text: "Ok" }])
                } else if (error.code === 'auth/internal-error') {
                    Alert.alert("Password", "Please enter a password", [{ text: "Ok" }])
                } else if (error.code === 'auth/wrong-password') {
                    Alert.alert("Wrong Password", "Password Invalid", [{ text: "Ok" }])
                } else if (error.code === 'auth/user-not-found') {
                    Alert.alert("No User", "No user with email", [{ text: "Ok" }])
                } else if (error.code === 'auth/too-many-requests') {
                    Alert.alert("Too many requests", "Account had been temporarily disabled due to many failed login attempts. You can immediatly restore it by resetting your password or you can try again later", [{ text: "Ok" }])
                } else if (error.code === 'auth/network-request-failed') {
                    Alert.alert("Network", "Please connect to a network", [{ text: "Ok" }])
                } else {
                    alert(error.message)
                }
            })
    }

    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-[#16688B]">

            <View className="absolute -z-20 top-[-200.28px] left-[-150.28px]">
                <Image source={require("../assets/Backgrounds/Login.png")} />
            </View>

            <View className=" absolute -top-[30px] left-[50px] -z-0">{
                !Show ? null :
                    <View className="rotate-90 mt-[30px] top-[30px] left-[-20px]">
                        <Animatable.Text animation="fadeInLeft" duration={1000} style={{ fontFamily: "PoppinsBold" }} className="text-[62px] text-white">Log</Animatable.Text>
                        <Animatable.Text animation="fadeInLeft" duration={1000} style={{ fontFamily: "PoppinsBold" }} className="text-[62px] mt-[-55px] text-white">in.</Animatable.Text>
                    </View>
            }
            </View>

            <Pressable onPress={() => {
                Keyboard.dismiss()
                setShow(true)
            }} className="absolute bottom-0 -z-10">
                <Image resizeMode='cover' className="w-[426.99px] h-[482.84px]" source={require("../assets/Backgrounds/W.png")} />
            </Pressable>

            <KeyboardAvoidingView behavior='padding' className="justify-center items-center">
                <View className="bg-[#3A3A3A] font-bold w-[320px] h-[51px] justify-center rounded-[10px] border-[#3A3A3A] border-2 focus:border-[#fff]">
                    <TextInput blurOnSubmit={false} returnKeyType='next' onSubmitEditing={() => { this.secondTextInput.focus(); }} onFocus={() => { setShow(false) }} placeholderTextColor={"white"} className="text-white text-[16px]" style={{ paddingLeft: 20, paddingRight: 20, fontFamily: "PoppinsRegular" }} placeholder='Username' value={username} onChangeText={text => setUsername(text)} />
                </View>
                <View className="bg-[#3A3A3A] font-bold w-[320px] mt-[15px] h-[51px] justify-center rounded-[10px] border-[#3A3A3A] border-2 focus:border-[#fff]">
                    <TextInput blurOnSubmit={false} returnKeyType='next' ref={(input) => { this.secondTextInput = input; }} onSubmitEditing={() => { this.thirdTextInput.focus(); }} inputMode='email' onFocus={() => { setShow(false) }} placeholderTextColor={"white"} className="text-white text-[16px]" style={{ paddingLeft: 20, paddingRight: 20, fontFamily: "PoppinsRegular" }} placeholder='Email' value={email} onChangeText={text => setEmail(text)} />
                </View>
                <View className="bg-[#3A3A3A] font-bold w-[320px] mt-[15px] h-[51px] justify-center rounded-[10px] border-[#3A3A3A] border-2 focus:border-[#fff]">
                    <TextInput returnKeyType='done' ref={(input) => { this.thirdTextInput = input; }} secureTextEntry onFocus={() => { setShow(false) }} placeholderTextColor={"white"} className="text-white text-[16px]" style={{ paddingLeft: 20, paddingRight: 20, fontFamily: "PoppinsRegular" }} placeholder='Password' value={password} onChangeText={text => setPassword(text)} />
                </View>
                <TouchableOpacity onPress={handleSignIn} activeOpacity={0.5} className="w-[160px] mt-[30px] justify-center items-center rounded-md h-[51px] bg-[#3A3A3A]">
                    <Text style={{ fontFamily: "PoppinsRegular" }} className="text-[16px] text-[#fff]">Login</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>

            <View className="absolute top-[236px] left-[30px]">{
                !Show ? null :
                    <Animatable.Text animation="fadeInLeft" duration={1000} style={{ fontFamily: "PoppinsSemiBold" }} className="text-[17px] text-[#fff]">Let's log you in!</Animatable.Text>
            }
            </View>

            <View className="absolute bottom-[40px] z-10 left-[30px]">
                <Text style={{ fontFamily: "PoppinsSemiBold" }} className="text-[17px] text-[#3A3A3A]">Don't have an account?</Text>
                <Pressable className="bg-[#16688B] w-[150px] rounded-md items-center h-[50px] justify-center" onPress={() => { navigation.replace("Register") }}>
                    <Text style={{ fontFamily: "PoppinsSemiBold" }} className="text-[17px] text-[#fff] underline">Create one</Text>
                </Pressable>
            </View>

            <StatusBar style='light' />

        </SafeAreaView>
    )
}

export default LoginScreen