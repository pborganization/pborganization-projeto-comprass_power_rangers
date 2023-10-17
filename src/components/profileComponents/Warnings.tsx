<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface EditWarningProps {
    visible: boolean,
}
=======
import React from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50

interface LogOutWarningProps {
  visible: boolean;
  onCloseModal: () => void;
  onNoPress: () => void;
}

<<<<<<< HEAD
export const EditWarning: React.FC<EditWarningProps> = ({ visible }) => {
  return (
    <Modal transparent visible={visible}>

    </Modal>
  );
};

export const LogOutWarning: React.FC<LogOutWarningProps> = ({ visible, onCloseModal }) => {
  return (
    <Modal transparent visible={visible} animationType='fade'> 
      <View style={styles.warningContainer}>
        <View style={styles.background}/>
=======
export const LogOutWarning: React.FC<LogOutWarningProps> = ({
  visible,
  onCloseModal,
  onNoPress
}) => {
  const { signOut } = useAuth();

  const handleYesPress = () => {
    signOut();
    onCloseModal();
  };

  const handleNoPress = () => {
    onNoPress();
    onCloseModal();
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.warningContainer}>
        <View style={styles.background} />
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
        <View style={styles.warningContent}>
          <View>
            <Text style={styles.warningTitle}>Warning</Text>
          </View>
          <Text style={styles.text}>Do you really want to leave?</Text>
          <View style={styles.buttons}>
<<<<<<< HEAD
            <TouchableOpacity>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCloseModal}>
=======
            <TouchableOpacity onPress={handleYesPress}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNoPress}>
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
<<<<<<< HEAD
      </View> 
=======
      </View>
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
    </Modal>
  );
};

const styles = StyleSheet.create({
  warningContainer: {
    flex: 1,
    justifyContent: 'center',
<<<<<<< HEAD
    alignItems: 'center'
=======
    alignItems: 'center',
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  warningContent: {
    width: '80%',
    backgroundColor: '#F9F9F9',
    borderRadius: 34,
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 10,
    padding: 20,
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 25,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
<<<<<<< HEAD
    alignSelf: 'center'
=======
    alignSelf: 'center',
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
<<<<<<< HEAD
    marginTop: 29
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700'
  }
});
=======
    marginTop: 29,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
  },
});
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
