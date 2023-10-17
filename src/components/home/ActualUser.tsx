import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface ActualUserProps {
  isAuthenticated: boolean;
  profileName: string;
}

export const ActualUser = ({
  isAuthenticated = true,
  profileName,
}: ActualUserProps) => {
  if (!isAuthenticated) {
    return null;
  }

  return (
    <View style={[styles.absoluteContainer]}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/home/compass-banner.jpg')}
      />
      <Text style={styles.text}>Hello, {profileName}</Text>
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
  },
  image: {
    width: 22,
    height: 22,
    borderRadius: 25,
  },
});
