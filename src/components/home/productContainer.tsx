<<<<<<< HEAD
import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { QuantityIndicator } from './quantityIndicator';
import { Products } from './Products';
import { ProductType } from '../../contexts/productType';
import { useProductStore } from '../../hooks/productStore';
=======
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { QuantityIndicator } from './quantityIndicator';
import { Products } from './Products';
import { ProductType } from '../../interfaces/productType';
>>>>>>> acef90d31156a07de56c9200dc6410ecc28c6ad4

interface ProductContainerProps {
  product: ProductType;
}

export const ProductContainer: React.FC<ProductContainerProps> = React.memo(
  ({ product }: ProductContainerProps) => {
    return (
      <View style={styles.container}>
        <View>
          <QuantityIndicator
            key={product.id}
            productId={product.id}
            increasestyle={styles.increasebutton}
            decreasestyle={styles.decreasebutton}
          />
        </View>
        <View style={styles.productsContainer}>
          <Products product={product} />
        </View>
      </View>
    );
  },
);

ProductContainer.displayName = 'ProductContainer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 16,
    marginTop: 8,
  },
  increasebutton: {
    borderTopRightRadius: 16,
  },
  decreasebutton: {
    borderTopLeftRadius: 16,
  },
  productsContainer: {
    flex: 1,
  },
});
