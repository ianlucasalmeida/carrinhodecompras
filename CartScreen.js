import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useCart } from './CartContext';

const CartScreen = () => {
  const { cart, addToCart, delToCart, removeFromCart, clearCart, calculateTotal } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.name}</Text>
            <Text>Quantidade: {item.quantity}</Text>
            <Text>Preço: R$ {item.price.toFixed(2)}</Text>
            <Text>Total: R$ {(item.price * item.quantity).toFixed(2)}</Text>
            <View style={styles.buttons}>
              <Button title="+" onPress={() => addToCart(item)} />
              <Button title="-" onPress={() => delToCart(item)} />
              <Button title="Remover" onPress={() => removeFromCart(item.id)} />
            </View>
          </View>
        )}
      />
      <Text style={styles.total}>Total do Pedido: R$ {calculateTotal().toFixed(2)}</Text>
      <Button title="Excluir Todo o Carrinho" onPress={clearCart} />
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
  cartItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default CartScreen;
