import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export const LoadingProducts: React.FC = () => {
  const loadingData = Array.from({ length: 10 }).map((_, index) => ({
    id: `loading-${index}`,
    isLoading: true,
  }));

  return (
    <FlatList
      data={loadingData}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={() => (
        <View style={styles.container}>
          <View style={styles.productInfo}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.titlePlaceholder} />
            <Text style={styles.descriptionPlaceholder} />
            <Text style={styles.pricePlaceholder} />
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  containerquanty: {
    borderRadius: 8,
    width: 150,
  },
  container: {
    borderRadius: 8,
    width: 150,
    marginLeft: 16,
    marginTop: 16,
  },
  productInfo: {
    marginVertical: 8,
  },
  imagePlaceholder: {
    width: 148,
    height: 184,
    backgroundColor: 'lightgray', // Cor de fundo para a imagem de carregamento
    marginBottom: 3,
    borderRadius: 8,
  },
  titlePlaceholder: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
    backgroundColor: 'lightgray', // Cor de fundo para o título de carregamento
    marginBottom: 3,
    borderRadius: 8,
    width: '60%',
  },
  descriptionPlaceholder: {
    fontSize: 10,
    backgroundColor: 'lightgray', // Cor de fundo para a descrição de carregamento
    marginBottom: 3,
    borderRadius: 8,
  },
  pricePlaceholder: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    backgroundColor: 'lightgray', // Cor de fundo para o preço de carregamento
    borderRadius: 8,
    width: '40%',
    height: 15,
  },
});
