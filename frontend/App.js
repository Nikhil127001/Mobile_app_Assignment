import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer
 } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductPage from './Pages/Productpage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import CardSlider from './Components/CardSlider';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Productpage'>
        <Stack.Screen name='ProductPage' component={ProductPage} 
         options={{
          headerShown: false,
      }}
      />
      
        <Stack.Screen name='ProductDetailsPage' component={ProductDetailsPage}
         options={{
          headerShown: false,
      }}
      />
        <Stack.Screen name='CardSlider' component={CardSlider}
         options={{
          headerShown: false,
      }}
      />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
