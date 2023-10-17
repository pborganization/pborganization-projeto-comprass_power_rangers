import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
<<<<<<< HEAD
import { ProductType } from '../../contexts/productType';
=======
import { ProductType } from '../../interfaces/productType';
>>>>>>> acef90d31156a07de56c9200dc6410ecc28c6ad4
import { useNavigation } from '@react-navigation/native';

interface ProductProps {
  product: ProductType;
}

type ProductDetailsParams = {
  productId: number;
};

export const Products: React.FC<ProductProps> = React.memo(
  ({ product }: ProductProps) => {
    const navigation = useNavigation();

<<<<<<< HEAD
  const handleProductPress = () => {
    const params: ProductDetailsParams = { productId: product.id };
    // @ts-ignore
    navigation.navigate('ProductDetailsScreen', params);
  };
=======
    const handleProductPress = () => {
      const params: ProductDetailsParams = { productId: product.id };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      navigation.navigate('ProductDetailsScreen', params);
    };
>>>>>>> acef90d31156a07de56c9200dc6410ecc28c6ad4

    const description =
      product.description.length > 50
        ? `${product.description.substring(0, 50)}...`
        : product.description;

    const formattedPrice = product.price.toFixed(2);

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={handleProductPress}>
          <View style={styles.info}>
            <Image source={{ uri: product.images[0] }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${formattedPrice}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  },
);

Products.displayName = 'Products';

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    width: 150,
  },
  image: {
    width: 148,
    height: 184,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
  },
  priceContainer: {
    flex: 1,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  description: {
    fontSize: 10,
  },
  info: {
    flex: 0,
  },
});
