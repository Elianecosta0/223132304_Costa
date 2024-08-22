import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UserContext } from './UserContext'; 

const UserProfile = () => {
  const { userDetails, address, paymentDetails } = useContext(UserContext);
  const maskedCardNumber = paymentDetails.cardNumber ? paymentDetails.cardNumber.slice(-4) : '';

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>User Details</Text>
        <Text>Name: {userDetails.name}</Text>
        <Text>Email: {userDetails.email}</Text>
         <Text>Phone Number: {userDetails.phoneNumber}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Address Details</Text>
        <Text>Address: {address.address}</Text>
        <Text>City: {address.city}</Text>
        <Text>Zip Code: {address.zipCode}</Text>
      </View>
       <View style={styles.card}>
          <Text style={styles.cardTitle}>Payment Details</Text>
          <Text>Credit Card: **** **** **** {maskedCardNumber}</Text>
          
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default UserProfile;


