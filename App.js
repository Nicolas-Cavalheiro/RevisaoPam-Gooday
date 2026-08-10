import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './src/screens/LoadingScreen';
import AcessScreen from './src/screens/AcessScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignScreen from './src/screens/SignScreen';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "loading" screenOptions={{headerShown: false}}>
        <Stack.Screen name = "loading" component ={LoadingScreen}></Stack.Screen>
        <Stack.Screen name = "acess" component = {AcessScreen}></Stack.Screen>
        <Stack.Screen name = "login" component = {LoginScreen}></Stack.Screen>
        <Stack.Screen name = "sign" component = {SignScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
