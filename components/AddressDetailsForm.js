import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { UserContext } from './UserContext'; 
const AddressDetailsForm = ({ navigation }) => {
  const {setAddressDetails } = useContext(UserContext); 
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');

 const handleCheckout = () => {
  setAddressDetails({ address, city, zipCode });
  navigation.replace('Menu'); // Navigate to Menu screen after entering address
};

  return (
    <View style={styles.container}>
      <Text>Address Details</Text>
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <TextInput
        placeholder="City"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TextInput
        placeholder="Zip Code"
        value={zipCode}
        onChangeText={setZipCode}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleCheckout}>
        <Text style={styles.buttonText}>Go to Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
    
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
       },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
   input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginVertical: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
   button: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
 
});

export default AddressDetailsForm;

