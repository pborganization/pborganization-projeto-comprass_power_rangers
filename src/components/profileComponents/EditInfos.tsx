import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

<<<<<<< HEAD
export const EditInfos = () =>{
  const [name, setName] = useState('Juliane Gonçalves Freitas');
=======
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

>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Edit your name"
<<<<<<< HEAD
        value={name}
        onChangeText={(text) => setName(text)}
=======
        value={userName}
        onChangeText={handleNameChange} 
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
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
<<<<<<< HEAD
    borderTopColor: '#FFF',
    borderRightColor: '#FFF',
    borderLeftColor: '#FFF',
=======
    borderTopColor: '#F9F9F9',
    borderRightColor: '#F9F9F9',
    borderLeftColor: '#F9F9F9',
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
    borderWidth: 1,
    marginTop: 20,
    fontSize: 24,
    fontWeight: '600',
<<<<<<< HEAD
  }
});
=======
  },
});
>>>>>>> 41e4ee3f43de29f84097831a2090f44313038d50
