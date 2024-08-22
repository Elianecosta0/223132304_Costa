import React, { useState, useContext } from 'react';
import { View, Text, TextInput,StyleSheet , TouchableOpacity} from 'react-native';
import { UserContext } from './UserContext'; 

const UserDetailsForm = ({ navigation }) => {
  const { setUserDetails } = useContext(UserContext); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNext = () => {
    if (name && email && phoneNumber) {
      setUserDetails({ name, email, phoneNumber });
      navigation.replace('AddressDetails'); // Navigate to AddressDetails
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text>User Details</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email"
      />
       <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
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

export default UserDetailsForm;


