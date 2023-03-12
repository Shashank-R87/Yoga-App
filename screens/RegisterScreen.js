import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard, Image, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { auth } from "../firebase"
import { useNavigation } from '@react-navigation/core'
import * as Animatable from 'react-native-animatable'
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar'

const RegisterScreen = () => {

  async function storeUserdetails(email, username) {
    await SecureStore.setItemAsync("username", username);
    await SecureStore.setItemAsync("email", email);
    await SecureStore.setItemAsync("loggedin", "true");
  }

  async function checkloggedin() {
    let loggedin = await SecureStore.getItemAsync("loggedin");
    if (loggedin === "true") {
      navigation.replace("Initial")
    }
  }

  checkloggedin();

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

  const navigation = useNavigation()

  // useEffect(() => {
  //   const check = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace("Home")
  //     }
  //   })

  //   return check
  // }, [])


  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        storeUserdetails(user.email,username);
        navigation.replace("First");
      }).catch(error => {
        if (error.code === 'auth/invalid-email') {
          Alert.alert("Invalid Email", "The email entered is invalid", [{ text: "Ok" }])
        } else if (error.code === 'auth/email-already-in-use') {
          Alert.alert("Email", "Email already in use", [{ text: "Ok" }])
        } else if (error.code === 'auth/missing-email') {
          Alert.alert("No Email", "Enter an email", [{ text: "Ok" }])
        } else if (error.code === 'auth/weak-password') {
          Alert.alert("Weak Password", "Password should be at least 6 characters", [{ text: "Ok" }])
        } else if (error.code === 'auth/network-request-failed') {
          Alert.alert("Network", "Please connect to a network", [{ text: "Ok" }])
        } else {
          alert(error.message)
        }
      })
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#FFA53D]">

      <View className="absolute -z-20 top-[-200.28px] left-[-150.28px]">
        <Image source={require("../assets/Backgrounds/REGISTER.png")} />
      </View>

      <View className=" absolute top-[0px] left-[0px] -z-0">{
        !Show ? null :
          <View className="rotate-90 mt-[30px] top-[30px] left-[-20px]">
            <Animatable.Text animation="fadeInLeft" duration={1000} style={{ fontFamily: "PoppinsBold" }} className="text-[62px] text-white">Wel</Animatable.Text>
            <Animatable.Text animation="fadeInLeft" duration={1000} style={{ fontFamily: "PoppinsBold" }} className="text-[62px] mt-[-55px] text-white">come.</Animatable.Text>
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
        <TouchableOpacity onPress={handleSignUp} activeOpacity={0.5} className="w-[160px] mt-[30px] justify-center items-center rounded-md h-[51px] bg-[#3A3A3A]">
          <Text style={{ fontFamily: "PoppinsRegular" }} className="text-[16px] text-[#fff]">Register</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <View className="absolute top-[210px] left-[30px]">{
        !Show ? null :
          <Animatable.Text animation="fadeInLeft" duration={1000} style={{ fontFamily: "PoppinsSemiBold" }} className="mt-[60px] text-[17px] text-[#3A3A3A]">Let's get your registered!</Animatable.Text>
      }
      </View>

      <View className="absolute bottom-[40px] z-10 left-[30px]">
        <Text style={{ fontFamily: "PoppinsSemiBold" }} className="text-[17px] text-[#3A3A3A]">Already have an account?</Text>
        <Pressable className="bg-[#FFA53D] w-[100px] rounded-md items-center h-[50px] justify-center" onPress={() => { navigation.replace("Login") }}>
          <Text style={{ fontFamily: "PoppinsSemiBold" }} className="text-[17px] text-[#fff] underline">Login</Text>
        </Pressable>
      </View>

      <StatusBar style='auto' />
    </SafeAreaView>

  )
}

export default RegisterScreen