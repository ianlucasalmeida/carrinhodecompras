import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useCart } from './CartContext';

const products = [
  { id: 1, name: 'Produto 1', price: 10.00 },
  { id: 2, name: 'Produto 2', price: 20.00 },
  { id: 3, name: 'Produto 3', price: 30.00 },
];

const ProductsScreen = ({ navigation }) => {
  const { addToCart } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>{item.name}</Text>
            <Text>Preço: R$ {item.price.toFixed(2)}</Text>
            <Button title="Adicionar ao Carrinho" onPress={() => addToCart(item)} />
          </View>
        )}
      />
      <Button title="Ir para o Carrinho" onPress={() => navigation.navigate('Carrinho')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  productItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ProductsScreen;
