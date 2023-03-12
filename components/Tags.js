import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'

const Tags = ({text, rev}) => {

  const navigation = useNavigation()

  const getTagData = () =>{
    fetch("https://kdx9q0wc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22exercise%22%5D%7B%0A%20%20_id%2C%20title%2C%20videoId%2C%20time%2C%0A%20%20%22category_1%22%3Acategory_1-%3E_rev%2C%0A%20%20%22category_2%22%3Acategory_2-%3E_rev%2C%0A%20%20%22categoryTime%22%3AcategoryTime-%3E_rev%0A%7D%0A")
    .then((data) => data.json())
    .then((result) => {
      navigation.navigate("SearchScreen",{data:result.result, rev : rev, text: text});
    })
    .catch((error)=>{
      alert(error)
    })
  }
  
  return (
    <TouchableOpacity onPress={()=>{getTagData()}} activeOpacity={0.8} className="ml-[10px] mr-[10px]">
      <Text style={{paddingVertical:6, paddingHorizontal:15, fontFamily:"PoppinsSemiBold"}} className="bg-white rounded-[10px] text-[#3A3A3A] text-[14px] leading-[21px]">{text}</Text>
    </TouchableOpacity>
  )
}

export default Tags