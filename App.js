import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image,SafeAreaView,Button, Pressable } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerStyle:{
          backgroundColor: 'black',

        },
        headerTintColor: 'black'}} component={LoginScreen} />
        <Stack.Screen name="Register" options={{headerStyle:{
          backgroundColor: 'black',

        },
        headerTintColor: 'black'}}  component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
  
}
