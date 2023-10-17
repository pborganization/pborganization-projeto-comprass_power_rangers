/* eslint-disable no-empty */
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { LanguageOption } from '../components/profileComponents/LanguageOption';
import { EditInfos } from '../components/profileComponents/EditInfos';
import { LogOutWarning } from '../components/profileComponents/Warnings';
import { AntDesign } from '@expo/vector-icons';
import { useAuth } from '../contexts/AuthContext';


export const ProfileScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [verificationIcon, setVerificationIcon] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState(null);

  const { user } = useAuth();

  useEffect(() => {
    // Fetch user's name and email when the component mounts
    if (!user) {
      fetchUserProfile('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjgsImlhdCI6MTY5NzQ5Njc1NywiZXhwIjoxNjk5MjI0NzU3fQ.d_uxBRCgCjHyoEG1kwOz7-lzf-neXn4RgW-lfyW6YRM'); // Assuming you have a function to fetch the user profile
    }
  }, [user]);

  useEffect(() => {
    setVerificationIcon(isEnabled);
  }, [isEnabled]);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isLogOutWarningVisible, setIsLogOutWarningVisible] = useState(false);
  const handleCloseModal = () => {
    if (!isLogOutWarningVisible) {
      setVerificationIcon(!isEnabled);
    }
    setIsLogOutWarningVisible(false);
  };
  const handleNoPress = () => {
    setVerificationIcon(false); 
  };

  const fetchUserProfile = async (accessToken: string) => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setNameInput(data.name);
        setEmail(data.email);
        setUserId(data.id);
      } else {
        console.error('Failed to fetch user profile');
      }
    } catch (error) {
      console.error('Error fetching user profile', error);
    }
  };

  const updateUserProfile = async (newName: string) => {
    try {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/users/${userId}`,
        {
          method: 'PUT',
          body: JSON.stringify({
            name: newName, // Only update the name
          }),
        }
      );

      if (response.ok) {
      } else {
      }
    } catch (error) {
    }
  };

  const handleVerificationPress = () => {
    if (isEnabled) {
      setNameInput(nameInput);
      setIsEnabled(false);
      updateUserProfile(nameInput);
    }
  };
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FFFF'} barStyle={'dark-content'}/>
      {verificationIcon && (
        <TouchableOpacity style={styles.verification} onPress={handleVerificationPress}>
          <AntDesign name='checkcircle' size={46} color='#2AA952'/>
        </TouchableOpacity>
      )} 
      <View style={styles.titleImageContainer}>
        <Text style={styles.textTitle}>My profile</Text>
        <Image
          source={require('../../assets/images/my-profile-image.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.textInfoContainer}>
        {isEnabled ? (
          <EditInfos 
            userName={nameInput}
            onNameChange={setNameInput}
          />
        ) : (
          <Text style={styles.textName}>
            {nameInput}
          </Text>
        )}
        <Text style={styles.textEmail}>{email || 'matildabrown@mail.com'}</Text>
      </View>
      <View style={styles.edits}>
        <Text style={styles.text}>Edit Informations</Text>
        <Switch
          trackColor={{ false: '#C0C0C0', true: '#FF0024' }}
          thumbColor={isEnabled ? '#9B9B9B' : '#9B9B9B'}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.buttonSwitch}
        />
      </View>
      <LanguageOption />
      <View style={styles.edits}>
        <Text style={styles.text}>Log out</Text>
        <TouchableOpacity onPress={() => setIsLogOutWarningVisible(true)}>
          <Entypo
            name="log-out"
            size={20}
            color="#9B9B9B"
            style={styles.iconLog}
          />
        </TouchableOpacity>
        {isLogOutWarningVisible && (
          <LogOutWarning
            visible={isLogOutWarningVisible}
            onCloseModal={handleCloseModal}
            onNoPress={handleNoPress} 
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  verification: {
    position: 'absolute',
    top: 0,
    right: 16,
    marginTop: 23.87,
    marginRight: 5,
  },
  titleImageContainer: {
    marginTop: 64,
    marginLeft: 16,
    marginRight: 190,
    flexDirection: 'column',
  },
  textTitle: {
    color: '#000',
    fontSize: 32,
    fontWeight: '800',
  },
  image: {
    marginTop: 40.03,
    marginLeft: 109.34,
    marginRight: 112.56,
    borderRadius: 100,
  },
  textInfoContainer: {
    marginLeft: 16,
  },
  textName: {
    marginTop: 13.12,
    textAlign: 'center',
    color: '#000',
    fontSize: 24,
    fontWeight: '600',
  },
  textEmail: {
    marginLeft: 48,
    fontSize: 14,
    color: '#9B9B9B',
  },
  edits: {
    paddingVertical: 23,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#B6B6B6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#000',
    fontWeight: '700',
  },
  buttonSwitch: {
    marginLeft: 154,
  },
  iconLog: {
    marginLeft: 265,
  },
});
