import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import { UserContext } from './UserContext'; 

const PaymentDetailsForm = ({ navigation }) => {
  const { setPaymentDetails } = useContext(UserContext); 
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = () => {
    Alert.alert(
      'Save Payment Details',
      'Do you want to save these payment details?',
      [
        {
          text: 'No',
          onPress: () => {
            alert('Payment Successful');
           
            navigation.navigate('Menu');
          },
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            setPaymentDetails({ cardNumber }); 
            alert('Payment successfully!');
            

            navigation.navigate('Menu');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text>Payment Details</Text>
      <TextInput
        placeholder="Credit Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
        style={styles.input}
        keyboardType="numeric" // Ensure numeric input
      />
      <TextInput
        placeholder="Expire Date"
        value={expireDate}
        onChangeText={setDate}
        style={styles.input}
        keyboardType="date" 
      />

      <TextInput
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
        style={styles.input}
        keyboardType="numeric" // Ensure numeric input
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Payment</Text>
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

export default PaymentDetailsForm;


