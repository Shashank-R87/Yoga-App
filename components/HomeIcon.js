import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Path, G } from 'react-native-svg';

const HomeIcon = ({ color }) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20">
            <G id="Iconly_Bold_Home" data-name="Iconly/Bold/Home" transform="translate(-2.5 -2)">
                <G id="Home" transform="translate(2.5 2)">
                    <Path id="Path_3" data-name="Path 3" d="M6.635,18.773V15.716A1.419,1.419,0,0,1,8.058,14.3h2.874a1.429,1.429,0,0,1,1.007.414,1.408,1.408,0,0,1,.417,1v3.058a1.213,1.213,0,0,0,.356.867,1.231,1.231,0,0,0,.87.36h1.961a3.461,3.461,0,0,0,2.443-1A3.41,3.41,0,0,0,19,16.578V7.867a2.473,2.473,0,0,0-.9-1.9L11.434.676A3.1,3.1,0,0,0,7.485.747L.967,5.965A2.474,2.474,0,0,0,0,7.867v8.7A3.444,3.444,0,0,0,3.456,20H5.372a1.231,1.231,0,0,0,1.236-1.218Z" fill={color} />
                </G>
            </G>
        </Svg>
    )
}

export default HomeIcon