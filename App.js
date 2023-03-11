import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import CategoryScreen from './screens/CategoryScreen';
import VideoScreen from './components/VideoScreen';
import Empty from './screens/Empty';
import SearchScreen from './screens/SearchScreen';
import InitialScreen from './screens/InitialScreen';
import Question_1 from './components/Question_1';
import Question_2 from './components/Question_2';
import Question_3 from './components/Question_3';

const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    PoppinsSemiBold: require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    PoppinsBlack: require("./assets/fonts/Poppins/Poppins-Black.ttf"),
    PoppinsMediumItalic: require("./assets/fonts/Poppins/Poppins-MediumItalic.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    PoppinsRegular: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsMedium: require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
    Monoton: require("./assets/fonts/Monoton/Monoton-Regular.ttf"),
  });

  if (!loaded) return null;

  const opt = {
    headerShown: false,
  }

  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={opt} name="Initial" component={InitialScreen} />
          <Stack.Screen options={opt} name="Login" component={LoginScreen} />
          <Stack.Screen options={opt} name="Register" component={RegisterScreen} />
          <Stack.Screen options={opt} name="Empty" component={Empty} />
          <Stack.Screen options={opt} name="First" component={Question_1} />
          <Stack.Screen options={opt} name="Second" component={Question_2} />
          <Stack.Screen options={opt} name="Third" component={Question_3} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
