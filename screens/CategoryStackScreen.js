import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './CategoryScreen';
import VideoScreen from '../components/VideoScreen';
import SearchScreen from './SearchScreen';

const CategoryStackScreen = () => {
    const categoryStack = createNativeStackNavigator();

    const opt = {
        headerShown: false,
      }

    return (
        <categoryStack.Navigator>
            <categoryStack.Screen options={opt} name="CategoryScreen" component={CategoryScreen} />
            <categoryStack.Screen options={opt} name="SearchScreen" component={SearchScreen} />
            <categoryStack.Screen options={opt} name="Video" component={VideoScreen} />
        </categoryStack.Navigator>
    )
}

export default CategoryStackScreen