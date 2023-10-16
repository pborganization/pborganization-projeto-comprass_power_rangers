import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform,
  UIManager,
  TouchableWithoutFeedback,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../../../../assets/styles/Colors';
import { fetchProductByName } from '../../../services/fakeStoreAPI';
import { ProductType } from '../../../interfaces/productType';
import { ProductSearched } from './productsSearched';

export const SearchButton = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const [products, setProducts] = useState<ProductType[]>([]);

  const handleTextChange = (text: string) => {
    setSearchWord(text);
  };

  const handleButtonClick = () => {
    setShowSearchBox(!showSearchBox);
    setSearchWord('');
  };

  const handleCloseSearchBox = () => {
    setShowSearchBox(false);
  };

  const handleContainerClick = (e: any) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const searchProducts = async () => {
      if (searchWord.trim() !== '') {
        const products = await fetchProductByName(searchWord);
        setProducts(products);
      } else {
        setProducts([]);
      }
    };

    searchProducts();
  }, [searchWord]);

  useEffect(() => {
    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handleCloseSearchBox}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleButtonClick}>
          <View style={styles.searchButton}>
            <AntDesign name="search1" size={24} color="white" />
          </View>
        </TouchableOpacity>
        {showSearchBox && (
          <View style={styles.containerOcult}>
            <TouchableWithoutFeedback onPress={handleContainerClick}>
              <View style={styles.searchBox}>
                <TextInput
                  style={styles.text}
                  placeholder="Enter the product name"
                  onChangeText={handleTextChange}
                  value={searchWord}
                  autoFocus={true} // Set autofocus to true
                />
              </View>
            </TouchableWithoutFeedback>
            {searchWord.trim() !== '' && (
              <View style={styles.containerProducts}>
                <FlatList
                  style={styles.containerFlatlist}
                  data={products}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => <ProductSearched product={item} />}
                />
              </View>
            )}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    marginTop: 60,
    zIndex: 1,
    marginVertical: 20,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  containerOcult: {
    width: '100%',
    height: 1000,
  },
  containerFlatlist: {
    maxHeight: 200,
  },
  containerProducts: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.white,
    marginHorizontal: 30,
    marginTop: 10,
    borderRadius: 15,
    maxHeight: 200,
  },
  searchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    marginRight: 18,
    backgroundColor: Colors.red_500,
    borderRadius: 25,
    padding: 10,
  },
  searchBox: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 10,
    width: '92%',
    borderColor: Colors.red_500,
    borderWidth: 4,
    marginHorizontal: 18,
    marginTop: 8,
  },
  text: {
    paddingLeft: 10,
  },
});
