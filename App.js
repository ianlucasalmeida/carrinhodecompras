import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CartProvider } from './CartContext';
import ProductsScreen from './ProductsScreen';
import CartScreen from './CartScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Produtos">
          <Stack.Screen name="Produtos" component={ProductsScreen} />
          <Stack.Screen name="Carrinho" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
