import { View, Text, TouchableOpacity, Image, ImageBackground, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import CategoriesCard from '../components/CategoriesCard'
import MainCard from '../components/MainCard'
import { StatusBar } from 'expo-status-bar';
import Loading from '../components/Loading'

const HomeScreen = () => {

  const [data, setdata] = useState([])
  const [isloading, setisloading] = useState(true)

  useEffect(() => {
    fetch("https://kdx9q0wc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22exercise%22%5D%7Corder(_createdAt%20desc)%7B%0A%20%20_id%2Ctitle%2CvideoId%2C%20time%2C%0A%20%20%20%20%0A%20%20%22categoryTime%22%3AcategoryTime-%3Etime%2C%0A%20%20%22Category%201%22%3Acategory_1-%3Etype%2C%0A%20%20%22Category%202%22%3Acategory_2-%3Etype%2C%0A%7D%0A%0A")
      .then((data) => data.json())
      .then((result) => {
        setdata(result.result)
        setisloading(false)
      })
      .catch((error) => { alert(error) })
  }, [])

  return (
    <SafeAreaView className="flex-1 items-start justify-start bg-[#F38B5F]">

      <View className="absolute -z-20 top-[-150.28px] left-[-160.28px]">
        <Image source={require("../assets/Backgrounds/Yoga.png")} />
      </View>

      <View className="rotate-90 left-[40px] top-[-10px] -z-0">
        <Animatable.Text animation="fadeInLeft" duration={1000} style={{ fontFamily: "PoppinsBold" }} className="text-[62px] text-white">Yo</Animatable.Text>
        <Animatable.Text animation="fadeInLeft" duration={1000} style={{ fontFamily: "PoppinsBold" }} className="text-[62px] mt-[-55px] text-white">ga.</Animatable.Text>
      </View>

      <View className="absolute bottom-0 -z-10">
        <Image resizeMode='cover' className="w-[426.99px] h-[482.84px]" source={require("../assets/Backgrounds/Y.png")} />
      </View>

      <View className="-mt-[50px]">
        <Text style={{ fontFamily: "PoppinsSemiBold" }} className="ml-[30px] mt-[25px] text-[#3A3A3A] text-[17px]">My Course</Text>
        <MainCard videoId="j7rKKpwdXNE" />

        <Text style={{ fontFamily: "PoppinsSemiBold" }} className="ml-[30px] mt-[30px] text-[#3A3A3A] text-[17px]">Recommended trainings</Text>
        <ScrollView className="mb-[185px]">
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className="mt-[10px]">{
            isloading ? 
            <Loading width={250} /> :
            data.map(item => <CategoriesCard title={item.title} time={item.time} videoId={item.videoId} key={item._id} />)
          }
          </ScrollView>
        </ScrollView>
      </View>

      <StatusBar style='light' />
    </SafeAreaView>
  )

}

export default HomeScreen