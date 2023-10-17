import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ActualUser = () => {
  const { user } = useAuth();

  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const fetchUserProfile = async (accessToken: any) => {
    try {
      const response = await fetch(
        'https://api.escuelajs.co/api/v1/auth/profile',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );

      if (response.ok) {
        const data = await response.json();
        setName(data.name);
        setImage(data.avatar);
      } else {
        console.error('Failed to fetch user profile');
      }
    } catch (error) {
      console.error('Error fetching user profile', error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUserProfile(user);
    }
  }, [user]);

  return (
    <View style={styles.absoluteContainer}>
      <Image
        style={styles.image}
        source={{
          uri: `${image}`,
        }}
      />
      <Text style={styles.text}>Hello, {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  absoluteContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    marginTop: windowHeight * 0.11,
    marginLeft: windowHeight * 0.01,
    height: windowHeight * 0.03,
    borderRadius: (windowHeight * 0.05) / 2,
    flexDirection: 'row',
  },
  text: {
    padding: 4,
    fontSize: windowHeight * 0.013,
    marginRight: windowWidth * 0.02,
  },
  image: {
    width: windowWidth * 0.04,
    height: windowWidth * 0.04,
    borderRadius: (windowWidth * 0.04) / 2,
    marginLeft: windowWidth * 0.01,
  },
});
