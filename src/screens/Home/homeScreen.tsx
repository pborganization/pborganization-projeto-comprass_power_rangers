import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import { CategoryList } from '../../components/home/CategoryList';
import { SearchButton } from '../../components/home/SearchButtom/searchButtom';
import { ActualUser } from '../../components/home/ActualUser';
import { useAuth } from '../../contexts/AuthContext';

const screenHeight = Dimensions.get('window').height;

export const HomeScreen = () => {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <SearchButton />
      <FlatList
        ListHeaderComponent={
          <View style={styles.bannercontainer}>
            <ImageBackground
              source={require('../../../assets/images/home/compass-banner.jpg')}
              style={styles.backgroundImage}
            >
              {user ? <ActualUser /> : <></>}
              <View style={styles.logo}>
                <Text style={styles.logotext}>C</Text>
                <Image
                  source={require('../../../assets/images/home/logo-compass-uol.png')}
                  style={styles.logopic}
                />
                <Text style={styles.logotext}>mprass</Text>
              </View>
              <View style={styles.slogan}>
                <Text style={styles.slogantext}>Here you always win!</Text>
                <Entypo name="shopping-cart" size={46} color="red" />
              </View>
            </ImageBackground>
          </View>
        }
        data={[1]}
        renderItem={() => (
          <View style={styles.productscontainer}>
            <CategoryList />
          </View>
        )}
        keyExtractor={(item) => item.toString()}
      />
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  bannercontainer: {
    height: screenHeight * 0.5,
  },
  productscontainer: {
    flex: 1,
  },
  backgroundImage: {
    resizeMode: 'cover',
    height: '100%',
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logotext: {
    fontSize: 56,
    color: 'white',
  },
  logopic: {
    width: 45,
    height: 45,
  },
  slogan: {
    color: 'white',
    marginLeft: 16,
    marginBottom: 16,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  slogantext: {
    color: 'white',
    fontSize: 22,
    marginRight: 16,
  },
});
