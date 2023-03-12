import React from 'react'
import Svg, { Path, G } from 'react-native-svg';

const CategoryIcon = ({ color }) => {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <G id="Iconly_Bold_Category" data-name="Iconly/Bold/Category" transform="translate(-2 -2)">
                <G id="Category" transform="translate(2 2)">
                    <Path id="Path_5" data-name="Path 5" d="M5.92,11.47a2.542,2.542,0,0,1,2.54,2.561h0V17.44A2.548,2.548,0,0,1,5.92,20H2.54A2.554,2.554,0,0,1,0,17.44H0V14.031A2.549,2.549,0,0,1,2.54,11.47H5.92Zm11.54,0A2.549,2.549,0,0,1,20,14.031h0V17.44A2.554,2.554,0,0,1,17.46,20H14.08a2.548,2.548,0,0,1-2.54-2.56h0V14.031a2.542,2.542,0,0,1,2.54-2.561h3.38ZM5.92,0A2.548,2.548,0,0,1,8.46,2.561h0V5.97A2.542,2.542,0,0,1,5.92,8.53H2.54A2.548,2.548,0,0,1,0,5.97H0V2.561A2.555,2.555,0,0,1,2.54,0H5.92ZM17.46,0A2.555,2.555,0,0,1,20,2.561h0V5.97a2.548,2.548,0,0,1-2.54,2.56H14.08a2.542,2.542,0,0,1-2.54-2.56h0V2.561A2.548,2.548,0,0,1,14.08,0h3.38Z" fill={color} />
                </G>
            </G>
        </Svg>

    )
}

export default CategoryIcon