
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import UserDetailsForm from './components/UserDetailsForm';
import AddressDetailsForm from './components/AddressDetailsForm';
import PaymentDetailsForm from './components/PaymentDetailsForm';
import Menu from './components/Menu'; 
import Cart from './components/Cart'; 
import UserProfile from './components/UserProfile';
import { UserProvider } from './components/UserContext'; // 

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: true, 
          headerStyle: { backgroundColor: '#FFA500' }, 
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }, 
        }} 
      >
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserDetails" component={UserDetailsForm} />
            <Stack.Screen name="AddressDetails" component={AddressDetailsForm} />
            <Stack.Screen name="PaymentDetails" component={PaymentDetailsForm} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
        
      </NavigationContainer>
    </UserProvider>
  );
}

