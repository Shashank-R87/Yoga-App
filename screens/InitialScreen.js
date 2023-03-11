import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import InitialLoader from '../components/InitialLoader'
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from '@react-navigation/core'

const InitialScreen = () => {

    async function checkloggedin() {
        let loggedin = await SecureStore.getItemAsync("loggedin");
        if (loggedin === "true") {
            setTimeout(() => {
                navigation.replace("Empty")
            }, 2000);
        } else {
            setTimeout(() => {
                navigation.replace("Login")
            }, 2000);
        }
    }

    checkloggedin();

    const navigation = useNavigation()

    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <InitialLoader />
            <StatusBar style='light' />
        </SafeAreaView>
    )
}

export default InitialScreen