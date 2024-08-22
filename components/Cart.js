import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cart({ route }) {
  const { cart, setCart } = route.params; // Destructure cart and setCart from route parameters
  const navigation = useNavigation(); // Initialize navigation

  // Convert the cart object to an array of items
  const cartItems = Object.values(cart);
  
  // Calculate total price of the items in the cart
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Function to remove an item from the cart
  const handleRemoveItem = (item) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[item.id] && updatedCart[item.id].quantity > 1) {
        updatedCart[item.id].quantity -= 1; // Decrease quantity
      } else {
        delete updatedCart[item.id]; // Remove item if quantity is 1 or less
      }
      return updatedCart; // Return updated cart
    });
  };

  // Function to proceed to checkout
  const handleCheckout = () => {
    Alert.alert(
      "Checkout",
      `Total amount: R${total}\nAre you sure you want to proceed?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            navigation.navigate('PaymentDetails', { cart, total }); // Navigate to PaymentDetails
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.quantity}>Qty: {item.quantity}</Text>
              <Text style={styles.price}>R{item.price}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => handleRemoveItem(item)}
                >
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: R{total}</Text>
      </View>
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={handleCheckout}
      >
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: '#FF3B30',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  removeButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    paddingTop: 10,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  checkoutButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});




