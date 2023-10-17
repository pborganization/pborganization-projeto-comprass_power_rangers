import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

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
    <View style={[styles.absoluteContainer]}>
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
    marginTop: 60,
    marginLeft: 16,
    position: 'absolute',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    height: 30,
    borderRadius: 25,
    flexDirection: 'row',
  },
  text: {
    padding: 4,
    fontSize: 13,
    marginRight: 10,
  },
  image: {
    width: 22,
    height: 22,
    borderRadius: 25,
    marginLeft: 5,
  },
});
