import { View, Text, Image, TextInput, ScrollView, KeyboardAvoidingView, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import { useNavigation, useRoute } from '@react-navigation/core'
import Tags from '../components/Tags'
import CategoriesCard from '../components/CategoriesCard'
import { Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Loading from '../components/Loading'

const CategoryScreen = () => {

    const navigation = useNavigation();

    const [searchInput, setsearchInput] = useState("")

    const [data, setdata] = useState([])
    const [categoryData, setCategorydata] = useState([])
    const [timeData, setTimedata] = useState([])
    const [isloading, setisloading] = useState(true)
    const [catisloading, setcatloading] = useState(true)
    const [timeisloading, settimeloading] = useState(true)

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

    const textMatch = (searchtext, text) => {
        let search = searchtext.toLowerCase();
        let text1 = text.toLowerCase();
        var match = text1.match(search);
        return match
    }

    const getsearchData = (searchtext) => {
        fetch("https://kdx9q0wc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22exercise%22%5D%7B%0A%20%20_id%2C%20title%2C%20videoId%2C%20time%2C%0A%20%20%22category_1%22%3Acategory_1-%3E_rev%2C%0A%20%20%22category_2%22%3Acategory_2-%3E_rev%2C%0A%20%20%22categoryTime%22%3AcategoryTime-%3E_rev%0A%7D%0A")
            .then((data) => data.json())
            .then((result) => {
                var req_result = [];
                for (let i = 0; i < result.result.length; i++) {
                    if (textMatch(searchtext, result.result[i].title)) {
                        req_result.push(result.result[i]);
                    }
                }
                navigation.navigate("SearchScreen", { data: req_result, text: searchtext });
            })
            .catch((error) => {
                alert(error)
            })
    }

    useEffect(() => {
        fetch("https://kdx9q0wc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22exercise%22%5D%7Corder(_createdAt%20desc)%7B%0A%20%20_id%2Ctitle%2CvideoId%2C%20time%2C%0A%20%20%20%20%0A%20%20%22categoryTime%22%3AcategoryTime-%3Etime%2C%0A%20%20%22Category%201%22%3Acategory_1-%3Etype%2C%0A%20%20%22Category%202%22%3Acategory_2-%3Etype%2C%0A%7D%0A%0A")
            .then((data) => data.json())
            .then((result) => {
                setdata(result.result)
                setisloading(false)
            })
            .catch((error) => { alert(error) })
    }, [])

    useEffect(() => {
        fetch("https://kdx9q0wc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22category%22%5D%20%7C%20order(_updatedAt%20desc)%20%7B%0A%20%20_rev%2C%20_id%2C%20type%0A%7D%0A&%24rev=%22YsND8fzVq1l7vIZQKjd4py%22")
            .then((data) => data.json())
            .then((result) => {
                setCategorydata(result.result)
                setcatloading(false)
            })
            .catch((error) => { alert(error) })
    }, [])

    useEffect(() => {
        fetch("https://kdx9q0wc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22categoryTime%22%5D%20%7C%20order(_createdAt)%7B%0A%20%20_id%2C%20_rev%2C%20time%0A%7D")
            .then((data) => data.json())
            .then((result) => {
                setTimedata(result.result)
                settimeloading(false)
            })
            .catch((error) => { alert(error) })
    }, [])

    const route = useRoute()

    if (route.params) {
        var windowWidth = route.params.width;
        var windowHeight = route.params.height;
    } else {
        var windowWidth = Dimensions.get('window').width;
        var windowHeight = Dimensions.get('window').height;
    }

    return (
        <SafeAreaView className="flex-1 items-start justify-center bg-[#F35F5F]">

            <View className="absolute -z-20 top-[-150.28px] left-[-200.28px]">
                <Image source={require("../assets/Backgrounds/Search.png")} />
            </View>

            <View className="flex-row items-end justify-between -top-[60px] left-[50px] -z-0">{
                <View className="rotate-90 mt-[30px] top-[30px] left-[-30px]">
                    <Animatable.Text animation="fadeInLeft" duration={1000} style={{ fontFamily: "PoppinsBold" }} className="text-[62px] text-white">Sea</Animatable.Text>
                    <Animatable.Text animation="fadeInLeft" duration={1000} style={{ fontFamily: "PoppinsBold" }} className="text-[62px] mt-[-55px] text-white">rch.</Animatable.Text>
                </View>
            }
                {
                    <View style={{ width: windowWidth - 192 }} className="ml-[-20px] flex-row items-center bg-white justify-around rounded-[10px] h-[40px]">
                        <TextInput onSubmitEditing={() => getsearchData(searchInput)} value={searchInput} onChangeText={text => setsearchInput(text)} returnKeyType='search' className="text-[#ADADAD] leading-[21px]" style={{ fontFamily: "PoppinsRegular", width: windowWidth - 262, paddingTop: 4 }} placeholder='Search Yoga' />
                        <Image source={require("../assets/icons/Search.png")} />
                    </View>
                }
            </View>

            {
                !Show ? null :
                    <View className="absolute bottom-[-2px] -z-10">
                        <Image resizeMode='cover' className="w-[426.99px] h-[482.84px]" source={require("../assets/Backgrounds/S.png")} />
                    </View>
            }

            {
                !Show ? null :
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={{ fontFamily: "PoppinsSemiBold" }} className="ml-[30px] text-white text-[17px]">Categories Available</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className="mt-[18px]">
                            {
                                timeisloading ? <Loading width={100} /> :
                                    timeData.map(item => <Tags text={item.time} key={item._id} rev={item._rev} />)
                            }
                        </ScrollView>

                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className="mt-[25px]">
                            {
                                catisloading ? <Loading width={100} /> :
                                    categoryData.filter((_, i) => i % 2 === 0).map(item => <Tags text={item.type} key={item._id} rev={item._rev} />)
                            }
                        </ScrollView>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className="mt-[10px]">
                            {
                                categoryData.filter((_, i) => i % 2 !== 0).map(item => <Tags text={item.type} key={item._id} rev={item._rev} />)
                            }
                        </ScrollView>

                        <Text style={{ fontFamily: "PoppinsSemiBold" }} className="ml-[30px] mt-[25px] text-white text-[17px]">Courses Available</Text>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className="mt-[10px]">
                            {
                                isloading ?
                                    <Loading width={250} /> :
                                    data.map(item => <CategoriesCard title={item.title} time={item.time} videoId={item.videoId} key={item._id} />)
                            }
                        </ScrollView>
                    </ScrollView>}

            <StatusBar style='light' />

        </SafeAreaView>
    )
}

export default CategoryScreen