import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

interface EditInfosProps{
  userName: string,
  onNameChange: (name: string) => void;
}

export const EditInfos = ({userName, onNameChange}: EditInfosProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [name, setName] = useState(userName);
  const handleNameChange = (text: string) => {
    setName(text);
    onNameChange(text);  
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Edit your name"
        value={userName}
        onChangeText={handleNameChange} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
  },
  textInput: {
    width: 300,
    height: 40,
    borderTopColor: '#FFF',
    borderRightColor: '#FFF',
    borderLeftColor: '#FFF',
    borderWidth: 1,
    marginTop: 20,
    fontSize: 24,
    fontWeight: '600',
  },
});
