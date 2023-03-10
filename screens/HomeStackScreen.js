import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import VideoScreen from '../components/VideoScreen';
import SearchScreen from './SearchScreen';

const HomeStackScreen = () => {

    const HomeStack = createNativeStackNavigator();

    const opt = {
        headerShown: false,
      }

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen options={opt} name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen options={opt} name="SearchScreen" component={SearchScreen} />
            <HomeStack.Screen options={opt} name="Video" component={VideoScreen} />
        </HomeStack.Navigator>
    )
}

export default HomeStackScreen