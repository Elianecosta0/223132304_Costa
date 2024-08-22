import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';




export default function Menu() {
  
  const [cart, setCart] = useState({});
  const navigation = useNavigation();

  const handleAddToCart = (item) => {
    setCart((prevCart) => ({
      ...prevCart,
      [item.id]: {
        ...item,
        quantity: prevCart[item.id] ? prevCart[item.id].quantity + 1 : 1,
      },
    }));
  };

  const handleRemoveFromCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[item.id] && updatedCart[item.id].quantity > 1) {
        updatedCart[item.id].quantity -= 1;
      } else {
        delete updatedCart[item.id];
      }
      return updatedCart;
    });
  };
  const menu = [
  {
    id: '1',
    name: 'Bitoque',
    description: 'Delicious',
    price: 50,
    image: require('../assets/bitoque.jpeg')
  },
  {
    id:'2',
    name: 'burger',
    description: 'delicious',
    price: 50,
    image: require('../assets/burger.jpg')

  },
  {
    id: '3',
    name: 'pizza',
    description: 'delicious',
    price: 50,
    image: require('../assets/pizza.jpg')
  },
  {
    id: '4',
    name: 'sushi',
    description: 'delicious',
    price: 50,
    image: require('../assets/sushi.jpg')
  },
  {
    id: '5',
    name: 'kota',
    description: 'delicious',
    price: 50,
    image: require('../assets/kota.jpeg')
  },
  {
    id: '6',
    name: 'hot-dog',
    description: 'delicious',
    price: 50,
    image: require('../assets/hot-dog.jpeg')
  },
  {
    id: '7',
    name: 'Fries',
    description: 'delicious',
    price: 50,
    image: require('../assets/fries.jpeg')
  },
  {
    id: '8',
    name: 'Dunked Wings',
    description: 'delicious',
    price: 50,
    image: require('../assets/dunked.png')
  }
]

  return (
    <View style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Menu</Text>
        <TouchableOpacity onPress={() => {
  console.log("Profile icon pressed");
  navigation.navigate('UserProfile');
}}>
  <MaterialIcons name="person" size={30} color="black" />
</TouchableOpacity>

      </View>
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.detailsContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>R{item.price}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => handleRemoveFromCart(item)}>
                  <Text style={styles.quantityButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>
                  {cart[item.id] ? cart[item.id].quantity : 0}
                </Text>
                <TouchableOpacity onPress={() => handleAddToCart(item)}>
                  <Text style={styles.quantityButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Cart', { cart, setCart })}
      >
        <Text style={styles.cartButtonText}>View Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
   header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  detailsContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  cartButton: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  cartButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
    

