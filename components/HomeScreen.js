
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleGoToUserDetails = () => {
    navigation.navigate('UserDetails'); // Navigate to User Details Form
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/welcome-image.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to FoodDelivery</Text>
      <Text style={styles.subtitle}>
        Discover the best food  and place orders
        to enjoy them in the comfort of your home.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleGoToUserDetails}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFA500', 
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 30, 
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#FFA500', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;


