import React from 'react'
import Svg, { Path, G } from 'react-native-svg';

const HomeIcon = ({ color }) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20">
            <G id="Iconly_Bold_Profile" data-name="Iconly/Bold/Profile" transform="translate(-4 -2)">
                <G id="Profile" transform="translate(4 2)">
                    <Path id="Path_4" data-name="Path 4" d="M8,13.174c4.339,0,8,.7,8,3.425S12.315,20,8,20c-4.338,0-8-.7-8-3.425S3.685,13.174,8,13.174ZM8,0A5.292,5.292,0,1,1,2.706,5.291,5.273,5.273,0,0,1,8,0Z" fill={color} />
                </G>
            </G>
        </Svg>
    )
}

export default HomeIcon